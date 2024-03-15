import Modal from "./Modal.jsx";
import Button from "../Button.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/productSlice.js";
import {addOrder} from "../../redux/orderSlice.js";

function AddOrderModal() {
    const [name, setName] = useState("");
    const [orderID, setOrderID] = useState(0);
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Processing");

    const orders = useSelector(state => state.orders.data);
    const dispatch = useDispatch();

    const resetAllFields = () => {
        setName("");
        setOrderID(0);
        setDate("");
        setStatus("Processing");
    };

    const addOrderClick = () => {
        if (name && orderID && date && status) {
            const order = orders.find(order => order[0] === orderID);

            if (order) {
                alert("Order ID Already Exist");
            } else {
                dispatch(addOrder({
                    orderID, name, status, date
                }));
                alert("Order Added Successfully");
                resetAllFields();
            }


        } else {
            alert("Please fill all the fields correctly! And Try again.");
        }
    }

    return (
        <Modal heading="Add Order">
            <h3>Order ID</h3>
            <input type="number" value={orderID} onChange={e => setOrderID(parseInt(e.target.value))}/>
            <h3>Customer Name</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <h3>Order Date</h3>
            <input type="date" placeholder="yyyy-mm-dd" value={date} onChange={e => setDate(e.target.value)}/>
            <h3>Status</h3>
            <select value={status}
                    onChange={e => setStatus(e.target.value)}
            >
                <option>Processing</option>
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
            </select>
            <Button text="Add Order" onClick={addOrderClick} />
        </Modal>
    )
}

export default AddOrderModal;