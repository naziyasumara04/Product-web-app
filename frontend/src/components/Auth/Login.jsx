import { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
