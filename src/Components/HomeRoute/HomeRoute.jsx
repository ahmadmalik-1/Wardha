import React from 'react'

import HomeSlider from './HomeSlider'
import NewArrival from './NewArrival'
import WardhaOfficial from './WardhaOfficial'


function HomeRoute() {
    return (
        <div className='container-fluid p-0'>
          
            <HomeSlider/>
            <NewArrival/>
            <WardhaOfficial/>

        </div>
    )
}

export default HomeRoute
