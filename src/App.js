import "./scss/app.scss";
import React from "react";

import {Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/counterSlice';


function App() {
  const [ searchValue, setSearchValue ] = React.useState('');

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  
  return (
    <div className="wrapper">
      <div>
         <button className={() => dispatch(increment())}>increase</button>
         <span>{count}</span>
         <button onClick={() => dispatch(decrement())}>decrease</button>
      </div>



      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
          <div className="container">

              <Routes>
                  <Route path="/" element={<Home searchValue={searchValue}/>} />
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="*" element={<NotFoundBlock/>} />
              </Routes>
          </div>
      </div>
     
    </div>
  );
}
export default App;
