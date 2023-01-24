import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton"
import React from "react";


function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  // console.log(items)
  React.useEffect(() => {
      fetch("https://63c6738ddcdc478e15c1b17b.mockapi.io/items")
    .then((response) => {
      return response.json();
    })
    .then((arr) => {
      setItems(arr)
     setIsLoading(false)
    });
  },[])
     
  console.log(items);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
            isLoading ? [...new Array(6)].map((el,index) => <Skeleton key={index}/> ) :
                items.map((obj,index) => <PizzaBlock {...obj} key={index}/>
                )

            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
