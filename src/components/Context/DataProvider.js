import { createContext, useState, useEffect } from "react";
import Data from "../../Data.js";

export const DataCocntext = createContext();

export const DataProvider = (props) => {
    const [productos, setPrtoductos] = useState([]);

    useEffect(() => {
        const producto = Data.items
       if(producto) {
        setPrtoductos(producto)
       }else{
        setPrtoductos([])
       }
    }, []);

    const value = {
        productos: [productos]
    }

    return(
        <DataCocntext.Provider value={value}>
            {props.children}
        </DataCocntext.Provider>
    )

}