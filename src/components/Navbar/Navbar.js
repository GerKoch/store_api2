import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="NavContainer">
            <h2>Store Api</h2>
            <div className="links">
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/products">Products</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </div>
        </div>
    )
}


export default Navbar;