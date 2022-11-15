import { createContext, useState, useEffect } from "react";
import Data from "../../Data.js";

export const DataCocntext = createContext();

export const DataProvider = (props) => {
    const [productos, setPrtoductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

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

    useEffect(() =>{
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito){
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    },[carrito])

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.cantidad);
            }, 0)
            setTotal(res);
        }
        getTotal();
    }, [carrito])    

    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return(
        <DataCocntext.Provider value={value}>
            {props.children}
        </DataCocntext.Provider>
    )

}