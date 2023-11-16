import React from 'react'
import {Helmet} from 'react-helmet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function AdminPortal() {
    return (
        <>
            <Helmet>
                <style>{'body {background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #fff 100%), #fff;}'}</style>
            </Helmet>
            <Header/>
            <div className='container-fluid'>
                <div className="container">
                    <div className="row py-5">
                        <div class="d-flex justify-content-center align-items-center">
  
                            <div class="card border">
                                <ul class="nav nav-pills " id="pills-tab" role="tablist">
                                    <li class="nav-item text-center">
                                        <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
                                    </li>
                                    <li class="nav-item text-center">
                                        <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
                                    </li>

                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                        <div class="form px-4 py-5" >
                                            <div className=""> 
                                                <input type="text" name="" class="form-control" placeholder="Email or Phone" />
                                            </div>
                                            <div className=""> 
                                                <input type="text" name="" class="form-control" placeholder="Password" />
                                            </div>
                                            <button class="btn btn-dark btn-block">Login</button>

                                        </div>



                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div class="form px-4 py-5">
                                            <div>
                                                 <input type="text" name="" class="form-control" placeholder="Name" />
                                            </div>

                                            <div className="">
                                                 <input type="text" name="" class="form-control" placeholder="Email" />
                                            </div>

                                            <div className="">
                                                 <input type="text" name="" class="form-control" placeholder="Phone" />
                                            </div>

                                            <div className="">
                                                 <input type="text" name="" class="form-control" placeholder="Password" />
                                            </div>

                                            <button class="btn btn-dark btn-block">Signup</button>


                                        </div>



                                    </div>

                                </div>




                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default AdminPortal