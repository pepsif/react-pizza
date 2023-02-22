import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  totalPrice: 0,
  items : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   addProducts( state, action ) {
          state.items.push( action.payload );
      },
      removeItem( state, action ) {
          state.items.filter(obj => obj.id !== action.payload);
      },
      cleatItem( state, action ) {
          state.items = [];
      }
  },
});

export const { addProducts, removeItem, cleatItem } = cartSlice.actions;

export default cartSlice.reducer;