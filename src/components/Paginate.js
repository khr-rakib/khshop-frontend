import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, keyword }) => {
  return (
    pages > 1 && (
      <Pagination className='d-flex justify-content-center align-items-center mt-4'>
        {[...Array(pages).keys()].map((x, i) => (
          <LinkContainer
            key={i}
            to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
