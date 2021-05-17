import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { products, loading, error } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products &&
        products.map((p, i) => (
          <Carousel.Item key={i}>
            <Link to={`/products/${p._id}`}>
              <Image src={p.image} alt={p.name} fluid />
              <Carousel.Caption className='carousel-caption'>
                <h2>
                  {p.name} ({p.price})
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default ProductCarousel;
