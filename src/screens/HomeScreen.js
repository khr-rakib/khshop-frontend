import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Helmet>
        <title>Welcome to KhShop - Home</title>
        <meta
          name='description'
          content='We sell the best products for cheap'
        />
        <meta
          name='keywords'
          content='electronics, buy electronics, cheap electronics'
        />
      </Helmet>
      {!keyword && <ProductCarousel />}

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((p, i) => (
              <Col sm={12} md={6} lg={4} xl={3} key={i}>
                <Product product={p} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;

// ============
// react bootstrap pagination
