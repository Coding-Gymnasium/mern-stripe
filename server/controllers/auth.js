import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

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
    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      const { password, ...rest } = user._doc;
      return res.json(user);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};
