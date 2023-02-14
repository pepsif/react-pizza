import React from "react";

const Sort = ({ sortModalOptionId, changeSortOption }) => {
  const options = ['популярності','ціні','алфавиту'];
  const [openSortModal, setOpenSortModal] = React.useState(false);

    const onClickOption = (i) => {
    changeSortOption(i)
    setOpenSortModal(false)
  }
  
  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setOpenSortModal(!openSortModal)} > { options[sortModalOptionId] } </span>
       
      </div>
      {
      openSortModal && (
        <div className="sort__popup">
          <ul>
            {
              options.map((el,i) =>  <li onClick={() => onClickOption(i)}
              className={sortModalOptionId === i ? 'active':''}
              key={i}>{el}</li> 
              )

            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
