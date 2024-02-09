import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getProducts, getCart, getCotegoryById , getProductById} from "../../api/Home/home";

const Home = createSlice({
    name: "Home",
    initialState: {
        loading: false,
        categories: [],
        products:[],
        subData: [],

        corzina: false,
        categoryId: [],
        subCategory: [],
        cart: [],
        productId: [],
        },
    reducers: {
        SubData: (state, value) => {
            state.subData = value.payload;
          },
        
    },

    extraReducers: (builder) => {

        //getCategory
        builder.addCase(getCategory.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(getCategory.rejected, (state, action) => {
            state.loading = false;
        });

        //getProducts
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
        });

        // _____________________________________________________
        //productId 
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.loading = false;
            state.productId = action.payload
        })

        //getCategoryById
        builder.addCase(getCotegoryById.fulfilled, (state, action) => {
            state.loading = false;
            state.subCategory = action.payload
        });

        //getCart
        builder.addCase(getCart.fulfilled, (state, action) => {
              state.loading = false;
            state.cart = action.payload
        })



    }
})

export default Home.reducer;
export const { SubData} = Home.actions;

