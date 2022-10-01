import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Item from '../Components/Item/Item'
import Nav from '../Components/Navbar/Nav'
import Shop from '../Components/Shop/Shop'
export default function Pages() {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Item/:productId" element={<Item />}/>
          <Route path="/Shop" element={<Shop />}/>
        </Routes>
    </div>
  )
}