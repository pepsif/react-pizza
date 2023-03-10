import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import searchPizzasSlice from './slices/searchPizzasSlice';
import cartSlice from './slices/cartSlice';


export const store = configureStore({
    reducer: {
       filterSlice, searchPizzasSlice, cartSlice 
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
