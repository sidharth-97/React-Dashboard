// @/src/hooks/usePagination.js

import { useState } from 'react';

const usePagination = (data, initialRowsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const visibleElements = data.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const pageRange = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return {
    currentPage,
    rowsPerPage,
    visibleElements,
    pageRange,
    handlePageChange,
    setRowsPerPage,
  };
};

export default usePagination;
