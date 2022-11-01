import { createContext, useState, useEffect } from "react";
import Data from "../../Data.js";

export const DataCocntext = createContext();

export const DataProvider = (props) => {
    const [productos, setPrtoductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const producto = Data.items
       if(producto) {
        setPrtoductos(producto)
       }else{
        setPrtoductos([])
       }
    }, []);

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto se ha añadido al carrito")
        }
    }

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito]
    }

    return(
        <DataCocntext.Provider value={value}>
            {props.children}
        </DataCocntext.Provider>
    )

}