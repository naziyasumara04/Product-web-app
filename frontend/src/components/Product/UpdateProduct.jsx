import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const [formData, setFormData] = useState({
    name: "",
    category: "",
  });
  // const history = useNavigate();

  useEffect(() => {
    // Fetch the product details
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/update-product/${id}`, formData);
      alert("Product updated successfully!");
      history.push("/products"); // Redirect to product list
    } catch (error) {
      console.error("Error updating product:", error);
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
        <h2 style={{ color: "#1e3d59" }}>Update Product</h2>
        <label>
          Name:
          <input
            className="mt-2 form-control form-control-sm mt-2 col-12 col-md-6"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            className="mt-2 form-control form-control-sm mt-2 col-12 col-md-6"
            type="text"
            name="category"
            placeholder="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>

        <button
          className="mt-3"
          type="submit"
          style={{
            backgroundColor: "#1e3d59",
            color: "#f5f0e1",
            border: "none",
            borderRadius: "8px",
            padding: "4px 8px",
          }}
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
