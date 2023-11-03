import React from 'react'
import plusgraph from '../../Images/25percent.png'
import linegraph from '../../Images/linegraph.png'
function Graph() {
    return (
        <>

            <div className="container-fluid operational-cafe-main">
                <div className="container-xl">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="row operational-cafe">
                                <div className="col"><img src={plusgraph} alt="" width="80%" /></div>
                                <h2>Operational Cafés</h2>
                            </div>
                            <div className="row operational-cafe">
                                <p>We’ve been growing at a very steady rate since we opened in 2019. We currently have 25+ operational outlets, and we target on opening <span>60 by 2024.</span></p>
                            </div>
                        </div>
                        <div className="col-lg-7 text-end">
                            <img src={linegraph} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graph