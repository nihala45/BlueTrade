import React from 'react'

import Header from '../../componenets/Header/Header'
import Footers from '../../componenets/Footers/Footers'
import CartBody from '../../componenets/CartBody/CartBody'
import Address from '../../componenets/Address/Address'
export default function Home() {
  return (
    <div>
        <Header/>
        <Address/>
        <Footers/>
    </div>
    
  )
}
