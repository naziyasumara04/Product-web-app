import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );
      //   alert("Login successful!");
      alert(response.data.message);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div
      className="container mt-3 p-3"
      style={{ dispaly: "flex", textAlign: "center", width: "40%" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid #1e3d59",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#1e3d59" }}>Login</h2>
        <input
          className="mt-4 form-control form-control-sm mt-2 col-12 col-md-6"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <input
          className="mt-2 form-control form-control-sm mt-2 col-12 col-md-6"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "#1e3d59",
            color: "#f5f0e1",
            border: "none",
            borderRadius: "8px",
            padding: "4px 8px",
          }}
        >
          Login
        </button>
        <br />
        &nbsp;
        <p>
          New User?
          <Link to="/signup" style={{ color: "#1e3d59" }}>
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
