import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-4.webp";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    return (
        <div className="product-card" onClick={() => navigate("/product")}>
            <div className="thumbnail">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377;3500</span>
            </div>
        </div>
    )
};

export default Product;
