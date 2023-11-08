import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FranchiseBanner from './FranchiseBanner'
import FranchiseBox from './FranchiseBox' 
import SuccessStories from './SuccessStories'
import Slider1 from './Slider'
function Franchise() {
  return (
    <>
      <Header />
      <FranchiseBanner />
      <FranchiseBox /> 
      <Slider1 />
      <SuccessStories />
      <Footer />
    </>
  )
}

export default Franchise