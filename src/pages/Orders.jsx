import Page from "../components/Page.jsx";
import SearchBarInput from "../components/SearchBarInput.jsx";
import Button from "../components/Button.jsx";
import DataTable from "../components/DataTable.jsx";
import {ReactComponent as PlusImg} from "../assets/circle-plus.svg";
import {useDispatch, useSelector} from "react-redux";
import {ADD_ORDER, show} from "../redux/modalSlice.jsx";

function Orders() {
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();

    const addOrderClick = () => {
        dispatch(show(ADD_ORDER));
    }

    return (
        <Page heading="Orders" className="Orders" fullLineHeading={false}>
            <SearchBarInput placeholder="Search Orders"/>
            <div className="placeholder-div"></div>
            <Button text="Add Order" img={<PlusImg />} onClick={addOrderClick}/>
            <DataTable tableData={orders} options={{
                productTable: false
            }} />
        </Page>
    )
}

export default Orders;