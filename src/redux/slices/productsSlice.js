import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        try {
            const response = await axios.get(
                "https://127.0.0.1:8000/product/fetch-all"
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
        // return fetch('https://127.0.0.1:8000/product/fetch-all').then((response) =>
        //     response.json()
        // );
        
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "success";
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },
    },
});

export default productsSlice.reducer;
