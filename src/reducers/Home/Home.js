import { createSlice } from "@reduxjs/toolkit";
import { getCategory} from "../../api/Home/home";

const Home = createSlice({
    name: "Home",
    initialState: {
        loading: false,
        categories: [],
       
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

    }
})

export default Home.reducer;
export const { } = Home.actions;

