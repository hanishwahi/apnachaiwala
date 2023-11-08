import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FranchiseBanner from './FranchiseBanner'
import FranchiseBox from './FranchiseBox' 
import SuccessStories from './SuccessStories'
import Slider1 from './Slider'
import FranchiseInput from './FranchiseInput'
function Franchise() {
  return (
    <>
      <Header />
      <FranchiseBanner />
      <FranchiseBox /> 
      <Slider1 />
      <SuccessStories />
      <FranchiseInput/>
      <Footer />
    </>
  )
}

export default Franchise