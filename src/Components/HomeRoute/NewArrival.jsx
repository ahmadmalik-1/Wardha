import React,{useState} from 'react'
import data from '../../Api'



function NewArrival() {
    const[arivalData]=useState(data)
    return (
        <div className='container-fluid arriv p-0'>
            <h1><i>NEW ARRIVALS</i></h1>
        
        {/* **********slider********* */}

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <div className="arivalSlideMain">
          
          {arivalData.home.arrival1.map((e)=>{


            return  <div className="arivalSlideChild">
                <div className="arivImgDiv">
                    <img src={e.Img} style={{height:"100%",width:"100%"}}/>
                </div>
                    <h5>{e.title}</h5>
                    <p>{e.price}</p>
            </div>
            
            
          })}
      </div>
    </div>

    {/* <div class="carousel-item"> */}
      <div class="carousel-item" >
    <div className="arivalSlideMain">
          
          {arivalData.home.arrival2.map((e)=>{
            

            return  <div className="arivalSlideChild">
                <div className="arivImgDiv">
                    <img src={e.Img} style={{height:"100%",width:"100%"}}/>
                </div>
                    <h5>{e.title}</h5>
                    <p>{e.price}</p>
            </div>
            
            
          })}
      </div>
    </div>
  
  
  

  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div className='bakht'>
  {arivalData.home.bakht.map((e)=>{

    
    
     return  <div className="kht text-center">
       <div className="bkhtIm">
       <img src={e.Img} alt=""  style={{height:"100%",width:"100%"}}/>
       </div>
       <h2><i>{e.title}</i></h2>
       <button>{e.btn}</button>
</div>
  })}
    
  
</div>


<div className="brid">
  <img src={arivalData.home.bride.exp.Img} style={{height:"100%",width:"100%"}}/>
</div>

<div className="dul p-3">

  <img src={arivalData.home.dulha.exp2.Img} style={{height:"100%",width:"100%"}}/>

</div>

<div className="formal">
<img src={arivalData.home.sona.exp3.Img} style={{height:"100%",width:"100%"}}/>

</div>
        


      
        </div>
        
    )
}


export default NewArrival
