import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest"

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
