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
        <nav className="topnav h-20 lg:h-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block">
              <div className="justify-center flex items-baseline space-x-4 pt-2">
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
            <div className="-mr-2 flex lg:hidden justify-between">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent p-2 text-topcolor"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                    fill="#824444"
                  >
                    <rect width="100" height="15" rx="10"></rect>
                    <rect y="30" width="100" height="15" rx="10"></rect>
                    <rect y="60" width="100" height="15" rx="10"></rect>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 0 329.26933 329"
                    width="30"
                    fill="#824444"
                  >
                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
                  </svg>
                )}
              </button>
              <img
                src={process.env.PUBLIC_URL + "/logo.PNG"}
                alt=""
                className="w-28 h-20 mt-2"
              />
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
              <div
                className="lg:hidden bg-finalcolor h-screen"
                id="mobile-menu"
              >
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
      <nav className="bg-white pt-24 lg:pt-18 pb-2">
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
