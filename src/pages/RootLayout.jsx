import Header from "../components/Header.jsx";
import "./RootLayout.css";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {getShownModalElement} from "../redux/modalSlice.jsx";

function RootLayout() {
    const {visible, modalShown} =useSelector(state => state.modal);

    return (
        <>
            {visible && getShownModalElement(modalShown)}
            <Header />
            <Outlet />
        </>
    )
}

export default RootLayout;