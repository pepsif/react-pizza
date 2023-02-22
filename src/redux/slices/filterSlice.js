import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  categoryId: 0,
  sortModalOptionId: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId( state, action ) {
        state.categoryId = action.payload
    },
    setModalOptionId( state, action ) {
       state.sortModalOptionId = action.payload
    }
  },
});

export const { setCategoryId,setModalOptionId } = filterSlice.actions;

export default filterSlice.reducer;