import Products from "../../Products/Products";
import { useNavigate } from "react-router-dom";

const RelatedProducts = () => {
    const navigate = useNavigate();
    return (
        <div className="related-products" onClick={() => navigate("/product")}>
            <Products headingText="Related Products"/>
        </div>
    )
};

export default RelatedProducts;
