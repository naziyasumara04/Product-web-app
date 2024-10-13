import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error signing up:", error);
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
        <h2 style={{ color: "#1e3d59" }}>SignUp</h2>
        <input
          className="mt-4 form-control form-control-sm mt-2 col-12 col-md-6"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <br />
        <input
          className="mt-2 form-control form-control-sm mt-2 col-12 col-md-6"
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
          Signup
        </button>
      </form>
    </div>
  );
}
export default Signup;
