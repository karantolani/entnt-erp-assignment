import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./productSlice.js";
import ordersReducer from "./orderSlice.js";
import modalReducer from "./modalSlice.jsx";

const store = configureStore({
    reducer: {
        products: productReducer,
        orders: ordersReducer,
        modal: modalReducer
    }
})

export default store;