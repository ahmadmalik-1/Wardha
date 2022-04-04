import React,{useState} from 'react'
import data from '../../Api'

function WardhaOfficial() {
    const[officialData]=useState(data)
    return (
        <div>
            <div className="offic">
                <div className="container fic">
                <h1><i>{officialData.home.instaTitle.title}</i></h1>
                </div>
            <div className="pole d-flex">



            {officialData.home.insta.map((e)=>{
            

            return <div className="bord">
                
                <img src={e.Img} alt=""  style={{height:"100%",width:"100%"}}/>
            </div>
            
            
          })}




            </div>
            </div>
        </div>
    )
}

export default WardhaOfficial
