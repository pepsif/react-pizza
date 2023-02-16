import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './slices/filterSlice';
import searchPizzasSlice from './slices/searchPizzasSlice';


export const store = configureStore({
    reducer: {
       filterSlice, searchPizzasSlice 
    },
})

