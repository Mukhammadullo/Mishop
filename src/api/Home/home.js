import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest"


// getCategory
export const getCategory = createAsyncThunk("home/getCategory",
    async () => {
        try {
            const { data } = await axiosRequest.get("Category/get-categories")
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)

// getProducts
export const getProducts = createAsyncThunk("home/getProducts",
    async () => {
        try {
            const { data } = await axiosRequest.get("Product/get-products")
            return data?.data
        } catch (error) {
            console.log(error);
        }
    }
)