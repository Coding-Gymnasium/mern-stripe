// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast';

import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Navigation from './components/Navigation.js';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Toaster position="bottom-right" toastOptions={{
        duration: 3000,
      }}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
