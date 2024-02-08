import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getProducts} from "../../api/Home/home";

const Home = createSlice({
    name: "Home",
    initialState: {
        loading: false,
        categories: [],
        products:[]
       
    },
    reducers: {},

    extraReducers: (builder) => {

        //getCategory
        builder.addCase(getCategory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCategory.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(getCategory.rejected, (state, action) => {
            state.loading = false;
        });

        //get
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
        });

    }
})

export default Home.reducer;
export const { } = Home.actions;

