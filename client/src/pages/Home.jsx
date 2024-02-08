import React from 'react'
import Hero from '../components/Hero/Hero'
import Shop from '../components/Shop/Shop'
import Nav from '../components/Nav/Navbar'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Shop/>
    </div>
  )
}

export default Home