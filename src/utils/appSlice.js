import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true, 
        darkTheme:false,
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen=action.payload
            
        },
        toggleTheme:(state)=>{
            state.darkTheme=!state.darkTheme;
            
        }
    },
});
export const {toggleMenu,toggleTheme} = appSlice.actions;
export default appSlice.reducer;