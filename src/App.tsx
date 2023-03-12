import "./scss/app.scss";
// @ts-ignore
import React from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./components/Header";

import NotFoundBlock from "./components/NotFoundBlock/NotFoundBlock";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
      
  // @ts-ignore
    return (
    <div className="wrapper">
    
      <Header />
      <div className="content">
          <div className="container">

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="*" element={<NotFoundBlock/>} />
              </Routes>
          </div>
      </div>
     
    </div>
  );
}
export default App;
