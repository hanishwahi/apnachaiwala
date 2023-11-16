import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FranchiseBanner from './FranchiseBanner'
// import FranchiseBox from './FranchiseBox' 
import SuccessStories from './SuccessStories'
// import Slider1 from './Slider'
import FranchiseInput from './FranchiseInput'
import MissionBox from './FranchiseBox'
function Franchise() {
  return (
    <>
      <Header />
      <FranchiseBanner />
      <MissionBox/> 
      {/* <Slider1 /> */}
      <SuccessStories />
      <FranchiseInput/>
      <Footer />
    </>
  )
}

export default Franchise