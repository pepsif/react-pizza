import React from "react";

const Categories = ({categoryId, changeCategoryId}) => {

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