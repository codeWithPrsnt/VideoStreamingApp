import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchCache:{}
    },
    reducers:{
        addSearch:(state,action)=>{
            state.searchCache.action['key']=action['val'];
        }

    }
});
export const {addSearch} = searchSlice.actions;
export default searchSlice.reducer;