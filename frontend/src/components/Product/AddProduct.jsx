import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/add-product",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  return (
    <div
      className="container mt-5 p-3"
      style={{ dispaly: "flex", textAlign: "center", width: "50%" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid #1e3d59",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#1e3d59" }}>Add Product</h2>
        <input
          className="mt-2 form-control form-control-sm mt-2 col-12 col-md-6"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />
        <br />

        <input
          className="mt-2 form-control form-control-sm mt-2 col-12 col-md-6"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <br />
        <button
          className="p-1 m-2"
          type="submit"
          style={{
            backgroundColor: "#1e3d59",
            color: "#f5f0e1",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
