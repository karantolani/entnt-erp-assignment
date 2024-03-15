import "./Header.css";
import NavItem from "./NavItem.jsx";
import {ReactComponent as dashboardImg} from "../assets/layout-dashboard.svg";
import {ReactComponent as productImg} from "../assets/box.svg";
import {ReactComponent as ordersImg} from "../assets/shopping-cart-copy.svg";
import menuImg from "../assets/menu.svg";
import {useState} from "react";

function Header() {
    const [navVisible, setNavVisible] = useState(false);


    const toggleMenu = () => {
        setNavVisible(!navVisible);
    };
    
    return (
        <header>
            <h1 className="logo-heading">
                SwiftERP
            </h1>
            <nav>
                <NavItem to="/" text="Dashboard" img={dashboardImg}/>
                <NavItem to="/products" text="Products" img={productImg}/>
                <NavItem to="/orders" text="Orders" img={ordersImg}/>
            </nav>
            <div className="placeholder-div"></div>
            <img src={menuImg} className="menu-img" onClick={toggleMenu}/>

            {
                navVisible && <nav className="mobile-nav">
                    <NavItem to="/" text="Dashboard" img={dashboardImg}/>
                    <NavItem to="/products" text="Products" img={productImg}/>
                    <NavItem to="/orders" text="Orders" img={ordersImg}/>
                </nav>
            }
        </header>
    )
}

export default Header;