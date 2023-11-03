import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from './Banner'
import Graph from './Graph'
import MissionBox from './MissionBox'

function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Graph/>
      <MissionBox/>
      <Footer />
    </>
  )
}

export default Home