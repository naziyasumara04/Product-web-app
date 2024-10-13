import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./Navbar.jsx";
// import './index.css'
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import AddProduct from "./components/Product/AddProduct.jsx";
import ProductList from "./components/Product/ProductList.jsx";
import UpdateProduct from "./components/Product/UpdateProduct.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allproducts" element={<ProductList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
