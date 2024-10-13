import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-white mt-5 p-4 text-center"
      style={{ backgroundColor: "#1e3d59", color: "#f5f0e1" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Our web application streamlines the process of managing products,
              allowing users to easily add, update, and view products. Built
              with a user-friendly interface.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" style={{ color: "#f5f0e1" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/allproducts" style={{ color: "#f5f0e1" }}>
                  All products
                </Link>
              </li>
              <li>
                <Link to="/addproduct" style={{ color: "#f5f0e1" }}>
                  Add product
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ color: "#f5f0e1" }}>
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
      </div>
    </footer>
  );
}

export default Footer;
