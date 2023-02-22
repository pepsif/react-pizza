import React from "react";
import { useRef, useEffect } from "react";

const Sort = ({ sortModalOptionId, changeSortOption }) => {
  const options = ['популярності','ціні','алфавиту'];
  const [openSortModal, setOpenSortModal] = React.useState(false);
  const sortRef = useRef();

  // console.log(sortRef)

    const onClickOption = (i) => {
    changeSortOption(i)
    setOpenSortModal(false)
  }
  
  useEffect(() => {
    const handleClickOutside = event => {
      if(!event.composedPath().includes(sortRef.current)) {
        setOpenSortModal(false)
         console.log('click outside')
      }

     
    }

    document.body.addEventListener('click', handleClickOutside)
   
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
    
  }, [])
  

  return (
    <div className="sort" ref={sortRef}>
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
