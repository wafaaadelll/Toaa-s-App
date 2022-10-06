import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Item from "../Components/Item/Item";
import Nav from "../Components/Navbar/Nav";
import Shop from "../Components/Shop/Shop";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Scrolling from "../scrolling";
import Offers from "../Components/Offers/Offers";
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
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Offer" element={<Offers />} />
        </Routes>
      </Scrolling>
    </div>
  );
}
