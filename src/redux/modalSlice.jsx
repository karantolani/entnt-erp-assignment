import {createSlice} from "@reduxjs/toolkit";
import Modal from "../components/modal/Modal.jsx";
import AddProductModal from "../components/modal/AddProductModal.jsx";
import AddOrderModal from "../components/modal/AddOrderModal.jsx";

const initialState = {
    visible: false,
    modalShown: ""
};

export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_ORDER = "ADD_ORDER";

export const getShownModalElement = (modalShown) => {
    switch (modalShown) {
        case ADD_PRODUCT:
            return <AddProductModal />
        case ADD_ORDER:
            return <AddOrderModal />
        default:
            return <Modal />
    }
}

const modalSlice = createSlice({
    initialState,
    name: "modal",
    reducers: {
        show: (state, action) => ({modalShown: action.payload, visible: true}),
        hide: (state, action) => ({...state, visible: false}),
    }
})

export const {show, hide}  = modalSlice.actions

export default modalSlice.reducer;