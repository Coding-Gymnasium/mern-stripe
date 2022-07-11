
import {useContext, createContext} from 'react';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = useContext(createContext(null));
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

