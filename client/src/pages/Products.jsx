import React from 'react'
import Header from '../components/Header/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { useQuery } from '@apollo/client'
import { QUERY_ALL_PRODUCTS } from '../utils/queries'
import ProductList from '../components/ProductList'



const Products = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const candles2 = data?.candles || [];


  return (
    <div>
      <Header pageName={"Candles"}/>
      <Container className='mt-5'>
        <h2> Our Candles</h2>
        <p>Our candle fragrances were inspired by the rich aromas of tropical blooms, exotic fruits, and the essence of Filipino culture. Each candle comes in an 8oz. and 12oz. size. Bring a touch of the Philippines into your home today.</p>
        <Row>
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
            <ProductList
            data={data}
            />

        </Row>
      </Container>
    </div>
  )
}

export default Products