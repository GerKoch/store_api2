export const ProductItem = ({ data }) => {
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
                        <button className="btn">Añadir al carrito</button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
    )
}