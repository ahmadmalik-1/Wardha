import React,{useState} from 'react'
import data from '../../Api'

function Navbar1() {
    const [nav1]=useState(data)
    
    return (
            <div className="container-fluid text-center text-white nav1 ">
                <p style={{fontSize:"11px",letterSpacing:"1px"}}>
                {nav1.home.navBar1.luke}: {nav1.home.navBar1.shop}
                    </p>
                    </div>
        
    )
}

export default Navbar1
