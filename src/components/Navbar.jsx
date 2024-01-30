import Logo from "../assets/MadamLogo.png";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const {getCartItemsCount} = useContext(CartContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/">
          <img src={Logo} width={120} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/products"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link relative " to={"/cart"}>
                <span className="h-4 w-4 absolute -top-1 right-0 bg-black text-xs text-white flex justify-center items-center rounded-full">
                  {getCartItemsCount()}
                </span>
                <FiShoppingCart size={24}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
