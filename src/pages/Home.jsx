import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";


const Home =() =>{
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
    return(
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
    )
}

export default Home