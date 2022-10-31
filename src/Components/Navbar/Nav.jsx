import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { title: "Homme", link: "/" },
    { title: "About", link: "/About" },
    { title: "Shop", link: "/Shop" },
    { title: "Contact", link: "/Contact" },
  ];
  return (
    <div>
      <div className="Nav">
        <nav className="topnav py-1.5 h-10 lg:h-fit">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block">
              <div className="justify-center flex items-baseline space-x-4">
                {links.map((link, index) => {
                  return (
                    <NavLink
                      to={`${link.link}`}
                      end
                      key={index}
                      className="text-topcolor hover:border-b-2 border-topcolor hover:text-black px-3 py-2 text-sm font-medium"
                    >
                      {link.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <label>
                <input type="checkbox" />
                <span class="menu">
                  {" "}
                  <span class="hamburger"></span>{" "}
                </span>
                <ul>
                  {links.map((link, index) => {
                    return (
                      <li>
                        <NavLink
                          to={`${link.link}`}
                          end
                          key={index}
                          className="text-topcolor hover:border-b-2 border-topcolor hover:text-black px-3 py-2 text-sm font-medium"
                        >
                          {link.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </label>
            </div>
          </div>
        </nav>
        <nav className="bg-white py-1">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            speed={700}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="navbar mx-auto"
          >
            <SwiperSlide className="font-semibold text-gray-600">
              <div className="w-3/4 mx-auto">
                <span className="text-topcolor">NOTE : </span>WE CAN MAKE ANY
                DESIGN YOU WANT
              </div>
            </SwiperSlide>
            <SwiperSlide className="font-semibold text-gray-600">
              <div className="w-3/4 mx-auto">
                <span className="text-topcolor">NOTE : </span>YOU CAN CHOOSE
                WHAY COLOR TO BE
              </div>
            </SwiperSlide>
            <SwiperSlide className="font-semibold text-gray-600">
              <div className="w-3/4 mx-auto">
                <span className="text-topcolor">NOTE : </span>HAPPY TO HELP YOU
              </div>
            </SwiperSlide>
          </Swiper>{" "}
        </nav>
        <hr />
      </div>
      <nav className="bg-white pt-24">
        <div className="flex-shrink-0">
          <img
            className="h-24 w-44 mx-auto"
            src={process.env.PUBLIC_URL + "/Images/logo.png"}
            alt="LOGO"
          />
          {/* test */}
        </div>
      </nav>
      <nav className="text-gray-50 text-center py-1 bottonav">
        <p>
          <strong>For Contact</strong>+01228812605
        </p>
      </nav>
      <section className="whatsapp">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/201228812605">
          {" "}
          <img
            alt="Chat on WhatsApp"
            src={process.env.PUBLIC_URL + "Images/whatsapp.png"}
          />
        </a>
      </section>
    </div>
  );
}
