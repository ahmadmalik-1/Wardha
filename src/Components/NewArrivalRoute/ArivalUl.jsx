import React,{useState} from 'react'
import data from '../../Api'
import {RiArrowRightSFill} from 'react-icons/ri'
import {IoIosOptions} from 'react-icons/io'
import { Link } from 'react-router-dom'

function ArivalUl() { 
    const[oreoData]=useState(data)

    return (
                <div className='ref'>
        <div className="container-fluid refine">
                <ul className='arev'>
                    <li > <Link to="/" style={{color:"black",textDecoration:"none"}}> HOME </Link>   <RiArrowRightSFill/> <u>NEW ARRIVALS</u> </li>
                </ul>
                <ul>
                    <li className='lolo'><IoIosOptions style={{marginRight:"10px"}}/><span>REFINE SEARCH</span></li>
                </ul>
            </div>
            <div className="bagh container-fluid p-0">
                <div className="bag container-fluid d-flex flex-wrap">

                    {oreoData.arrival.arival19.map((e)=>{
                        return <div className="wasi col-lg-4 col-md-6 px-2">
                            <div className="kaju">

                            <img src={e.img} className='w-100'/>
                            </div>

                            <div className="raju">

                            <img src={e.img2} className='w-100' alt="" />

                            </div>
                            <h6>{e.details}</h6>
                            <h3>{e.title}</h3>
                            <p>{e.price}</p>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default ArivalUl
