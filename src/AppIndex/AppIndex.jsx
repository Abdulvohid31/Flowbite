import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Sections/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Products from '../Sections/Products/Products'

const AppIndex = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <Products/>
      <Footer/>
    </div>
  )
}

export default AppIndex
