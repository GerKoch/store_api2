import "./Styles.css";

const CardProducts = ({ agregarAlCarro, data }) => {
        
    return(
        <div className="container">
            <p>{data.title}</p>
            <img alt={data.id} src={data.image} />
            <hr />
            <p>{data.price}</p>
            <button onClick={() => agregarAlCarro(data)}>
                Agregar al carro
            </button>
        </div>
    )   
}

export default CardProducts;