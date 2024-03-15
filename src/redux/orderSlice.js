import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    headings: ["Order ID", "Customer Name", "Order Date", "Status"],
    data: [
        [101, "John Doe", "2023-01-05", "Pending"],
        [102, "Jane Smith", "2023-01-10", "Processing"],
        [103, "David Johnson", "2023-01-15", "Shipped"],
        [104, "Sarah Williams", "2023-01-20", "Delivered"],
        [105, "Michael Brown", "2023-01-25", "Cancelled"],
        [106, "Maria Garcia", "2023-02-01", "Pending"],
        [107, "James Martinez", "2023-02-05", "Processing"],
        [108, "Jennifer Lopez", "2023-02-10", "Shipped"],
        [109, "William Lee", "2023-02-15", "Delivered"],
        [110, "Sophia Taylor", "2023-02-20", "Cancelled"],
        [111, "Daniel Rodriguez", "2023-03-01", "Pending"],
        [112, "Emma Hernandez", "2023-03-05", "Processing"],
        [113, "Christopher Nguyen", "2023-03-10", "Shipped"],
        [114, "Olivia King", "2023-03-15", "Delivered"],
        [115, "Ava Garcia", "2023-03-20", "Cancelled"],
        [116, "Matthew Kim", "2023-04-01", "Pending"],
        [117, "Isabella Brown", "2023-04-05", "Processing"],
        [118, "Ethan Martinez", "2023-04-10", "Shipped"],
        [119, "Mia Johnson", "2023-04-15", "Delivered"],
        [120, "Jacob Rodriguez", "2023-04-20", "Cancelled"],
        [121, "Emily Nguyen", "2023-05-01", "Pending"],
        [122, "Alexander Taylor", "2023-05-05", "Processing"],
        [123, "Madison Hernandez", "2023-05-10", "Shipped"],
        [124, "Benjamin Martinez", "2023-05-15", "Delivered"],
        [125, "Chloe King", "2023-05-20", "Cancelled"],
        [126, "Elijah Rodriguez", "2023-06-01", "Pending"],
        [127, "Avery Lee", "2023-06-05", "Processing"],
        [128, "Amelia Martinez", "2023-06-10", "Shipped"],
        [129, "Abigail Smith", "2023-06-15", "Delivered"],
        [130, "Mason Nguyen", "2023-06-20", "Cancelled"],
        [131, "Evelyn Brown", "2023-07-01", "Pending"],
        [132, "Logan Taylor", "2023-07-05", "Processing"],
        [133, "Harper Garcia", "2023-07-10", "Shipped"],
        [134, "Sofia Johnson", "2023-07-15", "Delivered"],
        [135, "Jackson Williams", "2023-07-20", "Cancelled"],
        [136, "Ella Nguyen", "2023-08-01", "Pending"],
        [137, "Ryan Hernandez", "2023-08-05", "Processing"],
        [138, "Aria Martinez", "2023-08-10", "Shipped"],
        [139, "Natalie King", "2023-08-15", "Delivered"],
        [140, "Jack Rodriguez", "2023-08-20", "Cancelled"],
        [141, "Grace Taylor", "2023-09-01", "Pending"],
        [142, "Liam Garcia", "2023-09-05", "Processing"],
        [143, "Victoria Johnson", "2023-09-10", "Shipped"],
        [144, "Dylan Williams", "2023-09-15", "Delivered"],
        [145, "Zoe Nguyen", "2023-09-20", "Cancelled"],
        [146, "Luna Brown", "2023-10-01", "Pending"],
        [147, "Grayson Martinez", "2023-10-05", "Processing"],
        [148, "Brooklyn King", "2023-10-10", "Shipped"],
        [149, "Landon Rodriguez", "2023-10-15", "Delivered"],
        [150, "Stella Hernandez", "2023-10-20", "Cancelled"]
    ]
}

const orderSlice = createSlice({
    initialState,
    name: "orders",
    reducers: {
        deleteOrder: (state, action) => {
            return {
                ...state,
                data: state.data.filter((order, index) => {
                    return index !== action.payload;
                })
            }
        },
        addOrder: (state, {payload}) => ({
            ...state,
            data: [...state.data, [payload.orderID, payload.name, payload.date, payload.status]]
        })
    }
})

export const {addOrder, deleteOrder} = orderSlice.actions;

export default orderSlice.reducer;