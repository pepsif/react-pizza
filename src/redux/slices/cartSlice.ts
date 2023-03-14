import { createSlice  } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type : number;
  size : number;
  count: number;
}

type CartState = {
  totalPrice: number;
  totalCount: number;  
  items: CartItem[]
  }
  
const initialState: CartState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem (state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      state.totalPrice += action.payload.price;
      if (findItem) {
        findItem.count++;
        state.totalCount += 1;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
        state.totalCount += 1;
      }
    },
    removeItem(state, action) {
      state.items.filter((obj) => obj.id !== action.payload);
    },
    cleatItem(state, action) {
      state.items = [];
    },
    increaseCartItem(state, action) {
      state.items.map((el) => {
        if (el.id === action.payload.id) {
          el.count += 1;
          state.totalPrice += action.payload.price;
         
        }
      });
    },
    decreaseCartItem(state, action) {
      state.items.map((el) => {
        if (el.id === action.payload.id) {
          el.count -= 1;
          state.totalPrice -= action.payload.price;
          if (el.count < 0) {
            el.count = 0;
            state.totalPrice = 0;
            
          }
        }
      });
    },
  },
});

export const {
  addItem,
  removeItem,
  cleatItem,
  increaseCartItem,
  decreaseCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
