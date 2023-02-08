import "./scss/app.scss";
import React from "react";

import {Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
  const [ searchValue, setSearchValue ] = React.useState('');

  console.log(searchValue)

  return (
    <div className="wrapper">
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
