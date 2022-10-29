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
import Footer from "../Components/Footer/Footer";
import Errorpage from "../Components/ErrorPage/Errorpage";

const layout = (component) => {
  return (
    <>
      <Nav />
      {component}
      <Footer />
    </>
  );
};

export default function Pages() {
  return (
    <div>
      <Scrolling>
        <Routes>
          <Route path="/" element={layout(<Home />)} />
          <Route path="/Item/:productId" element={layout(<Item />)} />
          <Route path="/Shop" element={layout(<Shop />)} />
          <Route path="/About" element={layout(<About />)} />
          <Route path="/Contact" element={layout(<Contact />)} />
          <Route path="/Offer" element={layout(<Offers />)} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Scrolling>
    </div>
  );
}
