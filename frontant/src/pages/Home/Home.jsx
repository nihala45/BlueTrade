import React from 'react'
import HomeBody from '../../componenets/Home/HomeBody'
import Header from '../../componenets/Header/Header'
import Footers from '../../componenets/Footers/Footers'
import Banner from '../../componenets/Banner/Banner'
export default function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <HomeBody/>
        <Footers/>
    </div>
    
  )
}
