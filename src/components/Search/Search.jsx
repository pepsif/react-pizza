import React from "react";

import styles from "./Search.module.scss";

import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue } from "../../redux/slices/searchPizzasSlice";


import debounce from "lodash.debounce";


const Search = () => {
 const [ localeSearchValue, setLocalSearchValue ] = React.useState('')
 const inputRef = React.useRef()
 const dispatch = useDispatch()
 const searchValue = useSelector(state => state.searchPizzasSlice.searchValue)

  const debounceUpdateSearchValue = React.useCallback(
    debounce((value) => {
    console.log("test debounse",value)
    dispatch(setSearchValue(value));
  },2000),
  [],
  )
 
 const onClickClear = () => {
  dispatch(setSearchValue(''))
  setLocalSearchValue('')
  inputRef.current.focus()
 }
const updateSearchValue = (value) => {
  // console.log(localeSearchValue)
    setLocalSearchValue( value )
    debounceUpdateSearchValue(value)

}


  return (
    <div className={styles.root}>
     
      <input
        ref={inputRef}
        onChange={(event) => updateSearchValue(event.target.value)}
        value={localeSearchValue}
        className={styles.input}
        placeholder="Пошук Піцци...."
      />
      <svg className={styles.searchIcon} viewBox="0 0 64 64">
        <g id="Layer_63" data-name="Layer 63">
          <path d="M53.08,51l-9.84-9.84c10.24-11.82,1.63-30.7-14.15-30.64a18.63,18.63,0,0,0-18.61,18.6c-.06,15.79,18.82,24.4,30.64,14.16L51,53.08A1.5,1.5,0,0,0,53.08,51ZM13.48,29.08a15.62,15.62,0,0,1,15.61-15.6c20.69.86,20.69,30.35,0,31.21A15.62,15.62,0,0,1,13.48,29.08Z" />
        </g>
      </svg>
      {searchValue && (
        <svg onClick={() => onClickClear()} className={styles.iconClose} viewBox="0 0 24 24">
          <g id="_icons">
            <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
