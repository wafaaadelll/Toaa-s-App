import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Item from "../Components/Item/Item";
import Nav from "../Components/Navbar/Nav";
import Shop from "../Components/Shop/Shop";
import About from "../Components/About/About";
import Scrolling from "../scrolling";
export default function Pages() {
  return (
    <div>
      <Scrolling>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Item/:productId" element={<Item />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </Scrolling>
    </div>
  );
}
