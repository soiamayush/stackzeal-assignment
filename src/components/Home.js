import React from 'react'
import Activity from './Activity'
import Details from './Details'
import Header from './Header'
import Herosection from './Herosection'
import Objective from './Objective'

const Home = () => {
  return (
    <div>
      <div className='hero-section'>
        <Header/>
        <Herosection/>
      </div>
        <Activity/>
        <Objective/>
        <Details/>
    </div>
  )
}

export default Home