import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import Input from "../components/Input.js";
import Button from "../components/Button.js";

const Register = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("Test");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test-password");

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      console.log(data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setName("");
        setEmail("");
        setPassword("");
        toast.success(
          `Registration successful! Welcome ${data.user.name}. Please login`
        );
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
      <div className="container align-items-center d-flex">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="pt-5 fw-bold">Let's get started</h1>
          <p className="lead pb-4">
            Sign up for free. No credit card required.
          </p>

          <div className="form-control">
            <div className="d-grid">
              <Input label="Name" value={name} setValue={setName} />
              <Input
                label="Email"
                type="email"
                value={email}
                setValue={setEmail}
              />
              <Input
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
              />
              <Button
                handleClick={handleClick}
                type="danger"
                text="Register"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
