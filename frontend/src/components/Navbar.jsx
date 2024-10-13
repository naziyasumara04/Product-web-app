import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#f5f0e1", color: "#1e3d59" }}
    >
      <div
        className="container-fluid p-2"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="/allproducts">
          All products
        </Link>
        <Link className="nav-link" to="/addproduct">
          <i class="fa-solid fa-circle-plus"></i>&nbsp;Add product
        </Link>
        <Link className="nav-link active" to="/login">
          <i class="fa-regular fa-user"></i>&nbsp; Login
        </Link>

        <Link className="nav-link" to="/signup">
          <i class="fa-solid fa-user"></i>&nbsp; Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
