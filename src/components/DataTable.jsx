import "./DataTable.css";
import {ReactComponent as EditImg} from "../assets/edit.svg";
import {ReactComponent as DeleteImg} from "../assets/delete.svg";
import {deleteProduct} from "../redux/productSlice.js";
import {useDispatch} from "react-redux";
import {deleteOrder} from "../redux/orderSlice.js";

function ActionCell({rowIndex, productsTable}) {
    const dispatch = useDispatch();

    return (
        <td className="action-cell">
            <EditImg onClick={() => console.log("Edit Image Click", rowIndex)}/>
            <DeleteImg onClick={() => dispatch(productsTable ? deleteProduct(rowIndex) : deleteOrder(rowIndex))}/>
        </td>
    )
}


function DataTable({tableData, options}) {
    const {headings, data} = tableData;

    return (
        <div className="table-wrapper">
            <table className="data-table">
                <thead>
                <tr>
                    {
                        headings.map(heading => <th key={heading}>{heading}</th>)
                    }
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {
                    data.map((row, rowIndex) => (
                        <tr key={row[0]}>
                            {
                                row.map((cell, index) => {
                                    if (index === options.priceColumnIndex)
                                        return <td>₹{cell}</td>

                                    if (index === options.categoryColumnIndex)
                                        return (<td>
                                            <span className="category">{cell}</span>
                                        </td>);

                                    return <td>{cell}</td>
                                })
                            }
                            <ActionCell rowIndex={rowIndex} productsTable={options.productTable}/>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;