import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId,setModalOptionId } from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Paginate from "../components/Paginate/Paginate";


const Home = ({ searchValue }) => {
  const categoryId = useSelector(state => state.filterSlice.categoryId);
  const modalOptionId = useSelector(state => state.filterSlice.sortModalOptionId);
  // const {modalOptionId,categoryId} = useSelector(state => state.filterSlice);
  const dispatch = useDispatch();

  const changeCategoryId = (id) => {
  dispatch(setCategoryId(id))
 }
 const changeSortOption = (i) => {
  dispatch(setModalOptionId(i))
 }

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage ] = React.useState(1)
  
  
  function sortNumber(modalOptionId) {
    switch (modalOptionId) {
      case 0:
        return "rating";
      case 1:
        return "price";
      case 2:
        return "title";

       default:
        return 0 
    }
  }
  
  const search = searchValue ? `&search=${searchValue}` : '';
  
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://63c6738ddcdc478e15c1b17b.mockapi.io/items'
      +`?${ categoryId > 0 ? `category=${categoryId}` : ""}`
      +`&sortBy=${sortNumber(modalOptionId)}`
      + search + `&page=${currentPage}&limit=4`

    )
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, modalOptionId, searchValue, currentPage] );

  const pizzas = items.map((obj, index) => <PizzaBlock {...obj} key={index} />);
  const skeletons = [...new Array(6)].map((el, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} changeCategoryId={changeCategoryId} />
        <Sort
          sortModalOptionId={modalOptionId}
          changeSortOption={changeSortOption}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletons : pizzas }
      </div>

      <Paginate setCurrentPage={setCurrentPage}/>
         
      </div>
    
  );
};

export default Home;
