// Pagination.js
import React from 'react';
import {  Container, Pagination } from '@mui/material';

const siteFooter = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (event, page) => {
    onPageChange(page); 
  };

  return (
    <footer>
      <Container fluid>
          <Pagination
              count={totalPages}    
              page={currentPage}
              onChange={handlePageChange} 
              color="primary"
              variant="outlined"
              shape="rounded"
              showFirstButton="true"
          />
        </Container>
    </footer>
  )
};

export default siteFooter;
