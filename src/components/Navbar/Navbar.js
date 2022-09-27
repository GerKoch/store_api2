import { NavLink, useNavigate } from "react-router-dom";
import Carrito from "../Carrito/Carrito";
import "./Navbar.css";

const Navbar = () => {

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/cart");
    }

    return(
        <div className="NavContainer">
            <h2>Store Api</h2>
            <div className="links">
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/products">Products</NavLink>
                <button onClick={handleClick}>Cart</button>
                <Carrito />
            </div>
        </div>
    )
}


export default Navbar;