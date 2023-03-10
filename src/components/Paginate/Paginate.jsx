import React from 'react';
import styles from './Paginate.module.scss'
import ReactPaginate from 'react-paginate';

function Paginate ({setCurrentPage}) {

  return (
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={ event => setCurrentPage(event.selected+1)}
        pageRangeDisplayed={5}
        pageCount={ 3 }
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  )
}

export default Paginate