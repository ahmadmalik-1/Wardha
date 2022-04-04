import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa"

function Footer() {
    return (
        <div className="">

        <div className='container-fluid  d-lg-flex  p-0'>
            <div className="col-lg-6 col-md-12 col-12 ">
                <ul className='list-unstyled d-flex flex-wrap  p-2 justify-content-around text-md-center col-lg-6 col-md-12 col-12  ' style={{fontSize:"18px",color:"black"}}>
                    <li style={{fontWeight:"bold"}}>Follow Us</li>
                    <li><FaFacebookF/></li>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                </ul>

                <ul className='list-unstyled d-lg-flex d-md-none d-none justify-content-around col-lg-8 col-md-12 col-12 ' style={{fontSize:"13px",fontWeight:"600",color:"black",letterSpacing:"1px"}}>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Shipping Policy</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            
            <div className="col-lg-6 col-md-12 col-12  d-flex justify-content-lg-end justify-content-md-center  p-3">
                <ul className='list-unstyled   col-lg-7 col-md-12 col-12 pt-1'style={{color:"black",letterSpacing:"5px",fontSize:"22px",fontWeight:"600"}}>
                    <li className='text-lg-end text-md-center text-center'>SUBSCRIBE FOR UPDATES</li>
                    <li><input type="text" placeholder='Enter Your Email here...' className='footerInp col-12 w-100' /></li>
                </ul>
            </div>


        </div>
            <hr />
        </div>
    )
}

export default Footer
