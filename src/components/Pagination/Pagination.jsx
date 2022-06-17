import React from 'react';

//Styles
import styles from './Pagination.module.css';
import classNames from 'classnames/bind';

//Context
import useMyContext from '../../context/useMyContext';

//Constants
import { PAGE_LIMIT } from '../../constants/constants.js';

let cx = classNames.bind(styles);

const Pagination = ({ pageInfo, children }) => {
  const { pages, next, prev } = pageInfo;
  const { currentUrl, setCurrentUrl, currentPage, setCurrentPage } =
    useMyContext();

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    setCurrentUrl(next);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    setCurrentUrl(prev);
  }

  //43
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    const newUrl = currentUrl.replace(
      `page=${currentPage}`,
      `page=${pageNumber}`
    );

    setCurrentPage(pageNumber);
    setCurrentUrl(newUrl);
  }

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / PAGE_LIMIT) * PAGE_LIMIT;
    const paginationGroup = new Array(PAGE_LIMIT).fill().map((_, idx) => {
      return start + idx + 1;
    });
    return paginationGroup;
  };

  return (
    <div>
      {children}
      <div className={styles.pagination}>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={cx({ prev: true, disabled: !!(currentPage === 1) })}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => {
          if (item > pages) {
            return null;
          } else {
            return (
              <button
                key={index}
                onClick={changePage}
                className={cx({
                  paginationItem: true,
                  active: !!(currentPage === item && currentPage <= pages),
                })}
              >
                <span>{item}</span>
              </button>
            );
          }
        })}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={cx({ next: true, disabled: !!(currentPage === pages) })}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
