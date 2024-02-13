import React from 'react'
import Nav from '../components/Nav/Navbar'
import Container from 'react-bootstrap/Container'

import { useQuery } from '@apollo/client'
import { QUERY_ALL_PRODUCTS } from '../utils/queries'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer/Footer'



const Products = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];


  return (
    <div>
      <Nav/>
      <Container className='mt-5' style={{maxWidth: "1050px"}}>
        <h2> Our Candles</h2>
        <p>Our candle fragrances were inspired by the rich aromas of tropical blooms, exotic fruits, and the essence of Filipino culture. Each candle comes in an 8oz. and 12oz. size. Bring a touch of the Philippines into your home today.</p>
        {loading ? <div>Loading...</div> : <ProductList products={products} />}
      </Container>
      <Footer/>
    </div>
  )
}

export default Products