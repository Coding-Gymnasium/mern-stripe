import {useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../utils/functions.js";
import {UserContext} from '../context'

const Navigation = () => {
  const [state, setState] = useContext(UserContext);
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  console.log('STATE => ', state);

  return (
    <ul className="nav border">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>

      {isAuth() ? (
        <>
          <li className="nav-item">
            <span onClick={logout} className="nav-link">
              Logout
            </span>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Sign up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navigation;
