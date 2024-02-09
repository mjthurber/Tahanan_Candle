import React from 'react'
import Hero from '../components/Hero/Hero'
import Shop from '../components/Shop/Shop'
import Nav from '../components/Nav/Navbar'
import CustomerReviews from '../components/CustomerReviews/CustomerReviews'


const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Shop/>
      <CustomerReviews/>
    </div>
  )
}

export default Home