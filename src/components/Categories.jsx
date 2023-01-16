import React from "react";

const Categories = () => {
 const [ activeIndex, setActiveIndex ] = React.useState(0)
let categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

 const onclickCategory = ( index ) => {
  setActiveIndex(index)
}

    return(
      <div className = "categories">
              <ul>
                {categories.map( (el,index) =>{
                return  <li onClick={()=>{onclickCategory(index)}} 
                className = {activeIndex === index ? "active" : ''}
                key={index}
                >{el}</li>
                
                })}
                </ul>
            </div>
    )
   }

   export default Categories