import React from 'react';
import products from '../products';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>

      <Row>
        {products.map((p, i) => (
          <Col sm={12} md={6} lg={4} xl={3} key={i}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
