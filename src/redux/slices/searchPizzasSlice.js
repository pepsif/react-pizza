import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 searchValue : ''
}

export const searchPizzasSlice = createSlice({
    name: "searchPizzas",
    initialState,
    reducers: {
      setSearchValue( state, action ) {
          state.searchValue = action.payload
      }
    }
  });

  export const { setSearchValue } = searchPizzasSlice.actions;

  export default searchPizzasSlice.reducer