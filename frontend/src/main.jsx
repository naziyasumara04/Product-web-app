import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./Navbar.jsx";
// import './index.css'
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
