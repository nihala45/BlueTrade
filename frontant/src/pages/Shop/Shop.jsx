import React from 'react'
import Header from '../../componenets/Header/Header'
import Footers from '../../componenets/Footers/Footers'
import Shop from '../../componenets/shop/ShopBody'

export default function Home() {
  return (
    <div>
        <Header/>
        <Shop/>
        <Footers/>
    </div>
    
  )
}