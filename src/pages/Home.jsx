import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortModalOptionId, setSortActiveModalOption] = React.useState(0);
  const sortTypes = ["популярности", "цене", "алфавиту"];
  const categoriesTypes = ["Все","Мясные","Вегетарианская","Гриль","Острые", "Закрытые"];

  function sortNumber(sortModalOptionId) {
    switch (sortModalOptionId) {
    case 0:
        return 'rating'
    case 1:
        return 'price'    
    case 2:
        return 'title'
        
  }
  }
// alert(sortNumber(sortModalOptionId))

    React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://63c6738ddcdc478e15c1b17b.mockapi.io/items?${
      categoryId > 0 ? `category=${categoryId}` : ""
    }&sortBy=${sortNumber(sortModalOptionId)}`)
         
         
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortModalOptionId]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort
          sortModalOptionId={sortModalOptionId}
          setSortActiveModalOption={setSortActiveModalOption}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((el, index) => <Skeleton key={index} />)
          : items.map((obj, index) => <PizzaBlock {...obj} key={index} />)}
      </div>
    </div>
  );
};

export default Home;
