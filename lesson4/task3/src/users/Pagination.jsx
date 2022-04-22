import React, { useEffect } from 'react';

const Pagination = ({ goPrev, goNext, currentPage, itemsPerPage, totalIteam }) => {
  const isPrevPageAvailable = currentPage <= 0 ? {visibility: "hidden"} : {visibility: "inherit"};
  const isNextPageAvailable = currentPage >= Math.floor(totalIteam / itemsPerPage) ? {visibility: "hidden"} : {visibility: "inherit"};

  useEffect(() => {
    const btn = document.querySelectorAll('.btn');

    const onPageChange = (event) => 
      event.target.dataset.nextPage ? goNext() :goPrev();
      
    
    btn.forEach(button => 
      button.addEventListener('click', onPageChange)
    );
    
    return () => {
      btn.forEach(button => 
        button.removeEventListener('click', onPageChange)
      );
    }
  })
  

  return (
    <div>
      <div className="pagination">
        <button data-prev-page="prev-page" style={isPrevPageAvailable} className="btn">←</button>
        <span className="pagination__page">{currentPage + 1}</span>
        <button data-next-page="next-page" style={isNextPageAvailable} className="btn">→</button>
      </div>
    </div>
  );
};

export default Pagination;