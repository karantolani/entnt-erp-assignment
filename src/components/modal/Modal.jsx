import {createPortal} from "react-dom";
import "./Modal.css";
import {useDispatch} from "react-redux";
import {hide} from "../../redux/modalSlice.jsx";

function Modal({heading, children}) {
    const dispatch = useDispatch();

    return createPortal((
        <>
            <div className="modal-backdrop" onClick={() => dispatch(hide())}></div>
            <div className="modal-content">
                <h2>{heading}</h2>
                {children}
            </div>
        </>
    ), document.getElementById("modal"))
}

export default Modal;