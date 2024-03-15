import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    headings: ["Name", "Category", "Price", "Stock Quantity"],
    data: [
        ["Laptop", "Electronics", 50000, 20],
        ["Mobile Phone", "Electronics", 25000, 35],
        ["Printer", "Electronics", 10000, 15],
        ["Chair", "Furniture", 1500, 50],
        ["Desk", "Furniture", 3000, 25],
        ["Headphones", "Electronics", 2000, 40],
        ["Keyboard", "Electronics", 1500, 30],
        ["Mouse", "Electronics", 500, 60],
        ["Table", "Furniture", 5000, 10],
        ["Speaker", "Electronics", 3000, 20],
        ["Pen", "Stationery", 10, 100],
        ["Notebook", "Stationery", 50, 80],
        ["Backpack", "Bags", 2000, 30],
        ["Shoes", "Footwear", 3000, 40],
        ["T-shirt", "Clothing", 500, 120],
        ["Jeans", "Clothing", 1500, 80],
        ["Watch", "Accessories", 1000, 60],
        ["Sunglasses", "Accessories", 800, 50],
        ["Book", "Books", 200, 200],
        ["Calculator", "Stationery", 300, 25],
        ["Earphones", "Electronics", 1000, 45],
        ["Bag", "Bags", 1500, 30],
        ["Scissors", "Stationery", 100, 50],
        ["Stapler", "Stationery", 200, 20],
        ["Glue", "Stationery", 50, 40],
        ["Paper", "Stationery", 20, 300],
        ["Water Bottle", "Bottles", 300, 80],
        ["Umbrella", "Accessories", 400, 60],
        ["Socks", "Clothing", 100, 150],
        ["Towel", "Bathroom", 200, 70],
        ["Soap", "Bathroom", 50, 100],
        ["Shampoo", "Bathroom", 150, 60],
        ["Toothbrush", "Bathroom", 50, 120],
        ["Toothpaste", "Bathroom", 100, 80],
        ["Shaving Cream", "Bathroom", 200, 40],
        ["Razor", "Bathroom", 150, 30],
        ["Conditioner", "Bathroom", 200, 50],
        ["Comb", "Accessories", 50, 70],
        ["Mirror", "Accessories", 300, 40],
        ["Towel Rack", "Bathroom", 400, 20],
        ["Curtains", "Home Decor", 1000, 40],
        ["Cushions", "Home Decor", 500, 60],
        ["Vase", "Home Decor", 700, 30],
        ["Clock", "Home Decor", 400, 50],
        ["Photo Frame", "Home Decor", 200, 80],
        ["Plant", "Home Decor", 300, 25],
        ["Dining Table", "Furniture", 10000, 10],
        ["Sofa", "Furniture", 15000, 15],
        ["Bed", "Furniture", 20000, 8]
    ]
}

const productSlice = createSlice({
    initialState,
    name: "products",
    reducers: {
        deleteProduct: (state, action) => {
            return {
                ...state,
                data: state.data.filter((product, index) => {
                    return index !== action.payload;
                })
            }
        },
        addProduct: (state, {payload}) => ({
            ...state,
            data: [...state.data, [payload.name, payload.category, payload.price, payload.quantity]]
        })
    }
})

export const {addProduct, deleteProduct} = productSlice.actions;

export default productSlice.reducer;