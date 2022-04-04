import React from 'react'
import HomeRoute from './Components/HomeRoute/HomeRoute'
import ArivalRoute from './Components/NewArrivalRoute/ArivalRoute'
import Css from "./Assets/style.css"
import {Route} from "react-router-dom"
import Nav1 from "./Components/HomeRoute/Navbar1"
import Nav2 from "./Components/HomeRoute/Navbar2"
import Footer from './Components/HomeRoute/Footer'
import PretRoute from './Components/PretPorterRoute/PretRoute'
import JhirkRoute from './Components/JhirkiRoute/JhirkRoute'
import FormalRoute from './Components/Formals/FormalRoute'
import WeddingRoute from './Components/WeddingFestive/WeddingRoute'


function App() {
    return (
        <div>
<Nav1/>
<Nav2/>
            <Route path="/" exact>

            <HomeRoute/> 
            </Route>

<Route path="/newArrival">

            <ArivalRoute/>
            
</Route>

<Route path="/PretRoute">

<PretRoute/>
</Route>



<Route path="/JhirkRoute">
<JhirkRoute/>
</Route>





<Route path="/FormalRoute">
<FormalRoute/>
</Route>



<Route path="/WeddingRoute"> 
    <WeddingRoute/>
</Route>



<Footer/>
        </div>
    )
}

export default App
