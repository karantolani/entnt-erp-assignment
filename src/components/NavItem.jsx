import {NavLink} from "react-router-dom";

function NavItem({to, text, img: Img}) {
    return (
        <NavLink to={to} className="nav-item">
            <Img />
            {text}
        </NavLink>
    )
}

export default NavItem;