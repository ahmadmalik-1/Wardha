import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Image/logo.png"
import {CgSearch} from "react-icons/cg"
import {AiOutlineUser} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"

function Navbar2() {
    let cartBar=()=>{
        let rightBar=document.querySelector(".cartBar")
        rightBar.classList.toggle("cartMove")

        
        
        

    }
    return (
        <div className='Navbar2 position-sticky' style={{top:"32px",zIndex:"2"}} >
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link to="/" className="navbar-brand mx-md-auto mx-auto" ><img src={logo} alt="" style={{height:"40px"}} /></Link>

    <ul className='d-flex list-unstyled border nav2IconUl justify-content-around position-absolute'>
        <li><CgSearch/></li>
        <li><AiOutlineUser/></li>
        <li onClick={cartBar}><HiOutlineShoppingBag/></li>
    </ul>
    <div className="collapse navbar-collapse" id="navbarNav">


      <ul className="navbar-nav nav2Ul  d-flex flex-wrap justify-content-md-center col-lg-10 col-md-10 col-10 ">
        <li className="">
          <Link to="/newArrival" className="nav-link " style={{color:"black"}}>NEW ARRIVALS</Link>
        </li>
        <li className="">
          <Link to ="/PretRoute" className="nav-link"style={{color:"black"}}  >PRET-A-PORTER</Link>
        </li>
        <li className="">
          <Link className="nav-link"style={{color:"black"}} >LUXURY PRET</Link>
        </li>
        <li className="">
          <Link to="/JhirkRoute" className="nav-link"style={{color:"black"}} >JHIRKI BLOCK PRINTS</Link>
        </li>
        <li className="">
          <Link to="/FormalRoute" className="nav-link"style={{color:"black"}} >FORMALS</Link>
        </li>
        <li className="">
          <Link to="/WeddingRoute" className="nav-link"style={{color:"black"}} >WEDDING FESTIVE</Link>
        </li>
        <li className="">
          <Link className="nav-link"style={{color:"black"}} >BRIDALS</Link>
        </li>
        <li className="">
          <Link className="nav-link"style={{color:"black"}} >WARDA SALEEM BRIDES</Link>
        </li>
      </ul>


    </div>
    
  </div>
</nav>
<div className="cartBar cartMove"></div>



</div>

    )
}

export default Navbar2
