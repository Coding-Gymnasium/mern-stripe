import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const register = async (req, res) => {
  try {
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be longer than 6 characters",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken",
      });
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    // create account in stripe
    const customer = await stripe.customers.create({
      email,
    });
    console.log(` 🐣 stripe customer:${JSON.stringify(customer.email)}, created on sign up`)

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
        stripe_customer_id: customer.id,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const { password, ...rest } = user._doc;
      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    // check email
    if (!user) {
      return res.json({
        error: "User not found",
      });
    }
    // check password
    const match = await comparePassword(req.body.password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    // create sgined token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // send token
    const { password, ...rest } = user._doc;
    res.json({
      token,
      user: rest,
    });
  } catch (error) {
    console.log(error);
  }
};
