import React,{useState} from 'react'
import { Helmet } from 'react-helmet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import google from '../../Images/download-removebg-preview.png'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'


function AdminPortal() {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);


    const handleToggle = () => {
        if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(eyeOff)
           setType('password')
        }
     }
    return (
        <>
            <Helmet>
                <style>{'body {background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #fff 100%), #fff;}'}</style>
            </Helmet>
            <Header />
            <div className='container-fluid'>
                <div className="container">
                    <div className="row py-5">
                        <div className="d-flex justify-content-center align-items-center">

                            <div className="card border">
                                <ul className="nav nav-pills " id="pills-tab" role="tablist">
                                    <li className="nav-item text-center">
                                        <a className="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
                                    </li>
                                    <li className="nav-item text-center">
                                        <a className="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
                                    </li>

                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                        <div className="form px-4 py-5" >
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                                <p className='mb-0'>Login with</p>
                                                <img src={google} alt="" width={20} />
                                            </div>

                                            <div className="mb-4">
                                                <input type="text" name="" className="form-control" placeholder="Email or Phone" />
                                            </div>
                                            <div className="d-flex border mb-3">
                                                <input name="" className="form-control border-0 mb-0" placeholder="Password" type={type} autoComplete="current-password"  onChange={(e) => setPassword(e.target.value)}/>
                                                <span className="flex justify-around items-center" onClick={handleToggle}>
                                                    <Icon className="absolute mr-10 p-1" icon={icon} size={20} />
                                                </span>
                                            </div>
                                            <Link>Forgot Password?</Link> <br />
                                            <button className="btn btn-dark btn-block">Login</button>

                                        </div>



                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="form px-4 py-5">
                                            <div>
                                                <input type="text" name="" className="form-control" placeholder="Name" />
                                            </div>

                                            <div className="">
                                                <input type="text" name="" className="form-control" placeholder="Email" />
                                            </div>

                                            <div className="">
                                                <input type="text" name="" className="form-control" placeholder="Phone" />
                                            </div>

                                            <div className=" d-flex border">
                                                <input name="" className="form-control border-0 mb-0" placeholder="Password" type={type} autoComplete="current-password"/>
                                                <span className="flex justify-around items-center" onClick={handleToggle}>
                                                    <Icon className="absolute mr-10 p-1" icon={icon} size={20} />
                                                </span>
                                            </div>

                                            <button className="btn btn-dark btn-block">Signup</button>


                                        </div>



                                    </div>

                                </div>




                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default AdminPortal