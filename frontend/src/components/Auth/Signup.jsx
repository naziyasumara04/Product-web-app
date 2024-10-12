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
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
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
      <button type="submit">Signup</button>
    </form>
  );
}
export default Signup;
