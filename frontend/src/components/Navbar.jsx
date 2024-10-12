import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div
        className="container-fluid"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Link className="nav-link active" aria-current="page" to="/allproducts">
          All products
        </Link>
        <Link className="nav-link active" aria-current="page" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
