import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio/Inicio";
import { ProductosLista } from "./Products/index";



export const Paginas = () => {
    return(
        <section>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<ProductosLista />} />
            </Routes>
        </section>
    )
}