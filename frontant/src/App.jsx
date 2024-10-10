import React, { Profiler } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile'
import ProductDetail from './pages/productDetail/productDetail'
import Address from './pages/Address/Adress'
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetail" element={< ProductDetail />} />
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Address' element={<Address/>}/>
      

      </Routes>
    </Router>
  );
}

export default App;
