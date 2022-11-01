import { useContext } from "react";
import { DataCocntext } from "../Context/DataProvider";


export const ProductItem = ({ data }) => {
 
    const value = useContext(DataCocntext);
    const addCarrito = value.addCarrito;
 
    return(
        <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={data.image} alt={data.title} />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>{data.title}</h1>
                        <p>{data.category}</p>
                        <p className="price">${data.price}</p>
                    </div>
                    <div className="button">
                        <button className="btn" onClick={() => addCarrito(data.id)}>Añadir al carrito</button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
    )
}