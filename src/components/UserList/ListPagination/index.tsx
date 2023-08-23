import React from "react";
import arrow from "../../../assets/arrow.svg";
import { paginationConfig } from "../../../utils/paginationConfig";

interface ListPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ListPagination = ({ page, setPage }: ListPaginationProps) => {
  const { pageNumbers } = paginationConfig;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pageNumbers.length) {
      setPage(page + 1);
    }
  };
  return (
    <nav className="pagination-buttons">
      <ul className="buttons-wrapper">
        <li>
          <button className="previous-button" onClick={handlePreviousPage}>
            <img src={arrow} alt="Previous button arrow" />
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className={pageNumber === page ? "active" : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button className="next-button" onClick={handleNextPage}>
            <img src={arrow} alt="Next button arrow" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ListPagination;
