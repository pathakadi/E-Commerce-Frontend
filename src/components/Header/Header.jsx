import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import "./Header.scss";

const Header = () => {
    const navigate = useNavigate();
    const [scrolled , setScrolled] = useState(false);
    const [showCart , setShowCart] = useState(false);
    const [showSearch , setShowSearch] = useState(false);
    const handleScroll = () => {
        const offset = window.screenY;
        if(offset > 200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll" , handleScroll);
    } , [])

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/category")}>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>E-Business</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)}/>
                        <AiOutlineHeart/>
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart/>
                            <span>5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </>
    )
};

export default Header;