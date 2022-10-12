import { useContext } from "react";
import { DataCocntext } from "../Context/DataProvider";
import { ProductItem } from "./ProductItem";

export const ProductosLista = () => {

    const value = useContext(DataCocntext);
    const [productos] = value.productos

    console.log(productos)

    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                {
                    productos.map(prods => 
                        <ProductItem 
                            key={prods.id}
                            data={prods}
                        />     
                    )
                }
            </div>
        </>
    )
}