import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Career() {
  return (
    <>
      <Header />
      <div className="container-fluid career-main">
        <div className="container-xl">
          <div className="row ">
            <div className="col career-text">
              <h2>Do you have what it takes? </h2>
              <h3>Join Us Today!</h3>
              <p>We’re always always looking for energetic individuals who’re willing to put in the time and effort into our vision and mission.
                If you’re looking for job opportunities, you can apply from the open positions below or, fill the form and attach you CV.</p>
            </div>
          </div>
        </div>
      </div>
      <div  >
        <Footer />
      </div>
    </>
  )
}

export default Career