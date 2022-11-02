import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="relative bg-finalcolor pt-8 mt-7 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-sm mt-0 mb-2 text-gray-600">
                Find us on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <a
                  href="https://twitter.com/heartmade15?s=11&t=9CdFLrK1BOComhlQQYapnQ"
                  className="bg-white flex hover:bg-topcolor text-topcolor hover:text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaTwitter className="mx-auto text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/groups/921439081667115/?ref=share_group_link"
                  className="bg-white flex hover:bg-topcolor text-topcolor hover:text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebookF className="mx-auto text-xl" />
                </a>
                <a
                  href="https://instagram.com/heart.made678?igshid=NmNmNjAwNzg="
                  className="bg-white flex hover:bg-topcolor text-topcolor hover:text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaInstagram className="mx-auto text-xl" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6 footer">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-900 text-lg font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink
                        to={"/"}
                        className="text-topcolor hover:text-gray-400 font-semibold  pb-2 text-sm"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/Shop"}
                        className="text-topcolor hover:text-gray-400 font-semibold  pb-2 text-sm"
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/Offer"}
                        className="text-topcolor hover:text-gray-400 font-semibold  pb-2 text-sm"
                      >
                        Offers
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-900 text-lg font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink
                        to={"/About"}
                        className="text-topcolor hover:text-gray-400 font-semibold  pb-2 text-sm"
                      >
                        About Us
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={"/Contact"}
                        className="text-topcolor hover:text-gray-400 font-semibold pb-2 text-sm"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2022</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  HeartMade by
                </a>{" "}
                <a
                  href="mailto:wafaaadelll99@gmail.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Wafaa
                </a>{" "}
                &{" "}
                <a
                  href="mailto:smorsy25699@gmail.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Soly
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
