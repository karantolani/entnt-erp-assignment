import "./Products.css";
import Page from "../components/Page.jsx";
import SearchBarInput from "../components/SearchBarInput.jsx";
import Button from "../components/Button.jsx";
import {ReactComponent as PlusImg} from "../assets/circle-plus.svg";
import DataTable from "../components/DataTable.jsx";
import {useDispatch, useSelector} from "react-redux";
import {show} from "../redux/modalSlice.jsx";
import {ADD_PRODUCT} from "../redux/modalSlice.jsx";

function Products() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const addProductClick = () => {
        dispatch(show(ADD_PRODUCT));
    }

    return (
        <Page heading="Products" className="Products" fullLineHeading={false}>
            <SearchBarInput placeholder="Search Products"/>
            <div className="placeholder-div"></div>
            <Button text="Add Product" img={<PlusImg />} onClick={addProductClick} />
            <DataTable tableData={products} options={{
                productTable: true,
                priceColumnIndex: 2,
                categoryColumnIndex: 1
            }}/>
        </Page>
    )
}

export default Products;