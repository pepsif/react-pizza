import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  //  addItem( state, action ) {
  //         state.items.push( action.payload );
  //         state.totalPrice += action.payload.price;
  //         // console.log(action.payload.price)
  //     },
      addItem( state, action ) {
      const findItem =  state.items.find(obj => obj.id === action.payload.id);
      state.totalPrice += action.payload.price;
      if(findItem) {
        findItem.count++;
        state.totalCount += 1;
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
        state.totalCount += 1;
      }
      },
      removeItem( state, action ) {
          state.items.filter(obj => obj.id !== action.payload);
      },
      cleatItem( state, action ) {
          state.items = [];
      }
  },
});

export const { addItem, removeItem, cleatItem } = cartSlice.actions;

export default cartSlice.reducer;