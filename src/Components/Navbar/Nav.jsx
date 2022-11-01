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
    { title: "Home", link: "/" },
    { title: "About", link: "/About" },
    { title: "Shop", link: "/Shop" },
    { title: "Contact", link: "/Contact" },
  ];
  return (
    <div>
      <div className="Nav">
        <nav className="topnav h-12 lg:h-fit">
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
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent inline-flex items-center justify-center p-2 text-topcolor"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#824444"
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
                    fill="#824444"
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
              <div className="md:hidden bg-color h-screen" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3">
                  {links.map((link, index) => {
                    return (
                      <div className="py-2">
                        <NavLink
                          to={`${link.link}`}
                          end
                          key={index}
                          onClick={() => setIsOpen(!isOpen)}
                          className="text-topcolor hover:border-b-2 border-topcolor hover:text-black px-3 py-2 text-sm font-medium"
                        >
                          {link.title}
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
      <nav className="bg-white pt-12">
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
              <span className="text-topcolor">NOTE : </span>YOU CAN CHOOSE WHAY
              COLOR TO BE
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
      <nav className="bg-white pt-2">
        <div className="flex-shrink-0">
          <img
            className="h-24 w-44 mx-auto"
            src={process.env.PUBLIC_URL + "/logo.PNG"}
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
            src={process.env.PUBLIC_URL + "/whatsapp.png"}
          />
        </a>
      </section>
    </div>
  );
}
