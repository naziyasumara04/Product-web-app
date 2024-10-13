import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="mt-3" style={{ color: "#1e3d59" }}>
        All Products
      </h1>
      <div className="p-2">
        <ul>
          {products.map((product) => (
            <li
              key={product._id}
              style={{ listStyleType: "none", backgroundColor: "#f5f0e1" }}
              className="p-3"
            >
              {product.name} - {product.category}
              <Link to={`/update-product/${product._id}`}>
                <button
                  style={{
                    backgroundColor: "#1e3d59",
                    color: "#f5f0e1",
                    border: "none",
                    borderRadius: "8px",
                    padding: "4px 8px",
                    marginLeft: "5px",
                  }}
                >
                  Update
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ProductList;
