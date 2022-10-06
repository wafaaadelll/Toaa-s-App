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
    { title: "About", link: "/About" },
    { title: "Shop", link: "/Shop" },
    { title: "Contact", link: "/Contact" },
  ];
  return (
    <div>
      <div className="Nav">
        <nav className="topnav py-1.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden md:block">
              <div className="justify-center flex items-baseline space-x-4">
                <NavLink
                  to={"/Home"}
                  exactactiveclassname="is-active"
                  className=" hover:bg-topcolor hover:text-white text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                {links.map((link, index) => {
                  return (
                    <NavLink
                      to={`${link.link}`}
                      key={index}
                      activeclassname="is-active"
                      className="text-gray-500 hover:bg-topcolor hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {link.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Reports
                  </a>
                </div>
              </div>
            )}
          </Transition>
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
              <span className="text-topcolor">NOTE : </span>WE CAN MAKE ANY
              DESIGN YOU WANT
            </SwiperSlide>
            <SwiperSlide className="font-semibold text-gray-600">
              <span className="text-topcolor">NOTE : </span>YOU CAN CHOOSE WHAY
              COLOR TO BE
            </SwiperSlide>
            <SwiperSlide className="font-semibold text-gray-600">
              <span className="text-topcolor">NOTE : </span>HAPPY TO HELP YOU
            </SwiperSlide>
          </Swiper>{" "}
        </nav>
        <hr />
      </div>
      <nav className="bg-white pt-24">
        <div className="flex-shrink-0">
          <img
            className="h-24 w-44 mx-auto"
            src={"../Images/logo.png"}
            alt="LOGO"
          />
          {/* test */}
        </div>
      </nav>
      <nav className="text-gray-50 text-center py-1 bottonav">
        <p>
          <strong>For Contact</strong>+20111223456
        </p>
      </nav>
    </div>
  );
}
