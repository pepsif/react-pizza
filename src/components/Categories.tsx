import React from "react";
import {setCategoryId} from "../redux/slices/filterSlice";

interface CategoriesProps {
    categoryId: number;
    changeCategoryId: (index: number) => void;
}
const Categories: React.FC<CategoriesProps> = ({categoryId, changeCategoryId}) => {

    let categories = ['Усі', 'Мясні', 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті']

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => {
                    return <li
                        onClick={() => {
                            changeCategoryId(index)
                        }}
                        className={categoryId === index ? "active" : ''}
                        key={index}
                    >{categoryName}</li>

                })}
            </ul>
        </div>
    )
}

export default Categories