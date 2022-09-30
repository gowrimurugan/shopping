import './Product.css'
function Product(props) {
    return (
        <div className="product">
            <div className="image-area">
                <img src={props.image} />
            </div>
            <div className="text-area">
                <h2 className="text">{props.name}</h2>
                <div className="text">${props.price}</div>
                <div className="text-offer">{props.offer}%</div>
            </div>
        </div>
    )
}
export default Product;