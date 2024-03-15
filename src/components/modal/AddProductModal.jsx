import Modal from "./Modal.jsx";
import Button from "../Button.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/productSlice.js";

function AddProductModal() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const products = useSelector(state => state.products.data);
    const dispatch = useDispatch();

    const resetAllFields = () => {
        setName("");
        setCategory("");
        setPrice(0);
        setQuantity(0);
    };

    const addProductClick = () => {
        if (name && category && price && quantity) {
            const product = products.find(product => product[0].toLowerCase() === name.toLowerCase());

            if (product) {
                alert("Product Name Already Exist");
            } else {
                dispatch(addProduct({
                    name, category, price, quantity
                }));
                alert("Product Added Successfully");
                resetAllFields();
            }


        } else {
            alert("Please fill all the fields correctly! And Try again.");
        }
    }

    return (
        <Modal heading="Add Product">
            <h3>Product Name</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <h3>Product Category</h3>
            <input type="text" value={category} onChange={e => setCategory(e.target.value)}/>
            <h3>Product Price In Rs.</h3>
            <input type="number" min={0} value={price} onChange={e => setPrice(parseInt(e.target.value))}/>
            <h3>Stock Quantity</h3>
            <input type="number" min={0} value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}/>
            <Button text="Add Product" onClick={addProductClick} />
        </Modal>
    )
}

export default AddProductModal;