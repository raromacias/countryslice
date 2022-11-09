import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: {
        value: false,
    },
    reducers: {
        isAppLoading: (state) => {
           state.value = true
        },
        isNotLoading: (state) => {
           state.value = false;
        },
        
    }
});


export const {isAppLoading, isNotLoading} = isLoadingSlice.actions;
export const selectLoading = (state) => state.isLoading.value;
export default isLoadingSlice.reducer;