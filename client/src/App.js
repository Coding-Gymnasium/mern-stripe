import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Navigation from "./components/Navigation.js";
import StripeSuccess from "./pages/stripe-success.js";
import StripeCancel from "./pages/stripe-cancel.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stripe/success" element={<StripeSuccess />} />
        <Route path="/stripe/cancel" element={<StripeCancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
