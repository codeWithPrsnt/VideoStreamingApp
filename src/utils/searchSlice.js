import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
        addSearch:(state,action)=>{
            state=Object.assign(state,action.payload);
        }

    }
});
export const {addSearch} = searchSlice.actions;
export default searchSlice.reducer;