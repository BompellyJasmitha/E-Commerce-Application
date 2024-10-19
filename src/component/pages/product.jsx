import { useLocation } from "react-router-dom";
import '../../style/index.css';

export default function Product() {
    let location = useLocation();
    let data = location.state.x;

    return (
        <div className="product-container">
            <h1 className="product-title">{data.title}</h1>
            <div className="product-content">
                <div className="product-image">
                    <img src={data.image} alt="Product" />
                </div>
                <div className="product-details">
                    <p>CATEGORY: {data.category} - {data.id}</p>
                    <p>{data.description}</p>
                    <strike>₹{data.price + 1000}</strike>
                    <h1>₹{data.price}</h1>
                    <h3>⭐{data.rating.rate}</h3>
                    <h3>LIMITED STOCK: {data.rating.count} (new)</h3>
                    <button className="productbutton">BUY NOW</button>
                </div>
            </div>
        </div>
    );
}
