import React from 'react'
import Brands from './Brands'
import Banner from './Banner'
import Featured from './Featured'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Brands/>
      <AboutUs/>
      <Featured/>
    </div>
  )
}

export default Home