import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Products from "./Products/Products";
import NotFoundPage from "./NotFoundPage";
import Cart from "../components/Cart/Cart";

const Dashboard = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/products" element={<Products />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="*" element={<NotFoundPage />} />                 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Dashboard;