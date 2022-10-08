import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "../ShopFilter/Filter.css";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import Product from "../../Service/Product";
import "./Shop.css";
import ShopButtons from "../ShopFilter/ShopButtons";
import ShopSort from "../ShopFilter/ShopSort";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [item, setItem] = useState(Product);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableRowsPerPage, setTableRowsPerPage] = useState(9);

  const getCurrentTableData = () => {
    return item.slice(
      currentPage * tableRowsPerPage - tableRowsPerPage,
      currentPage * tableRowsPerPage
    );
  };

  const paginateData = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const menuItems = [...new Set(Product.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Product.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  useEffect(() => {
    setItem(item);
    getCurrentTableData();
  }, []);
  function LowToHigh() {
    const sortData = [...item].sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    setItem(sortData);
  }
  function HighToLow() {
    const sortData = [...item].sort((a, b) => {
      return a.price < b.price ? 1 : -1;
    });
    setItem(sortData);
  }
  function largeToSmall() {
    const sortData = [...item].sort((a, b) => {
      return a.width + a.height < b.width + b.height ? 1 : -1;
    });
    setItem(sortData);
  }
  function smallToLarge() {
    const sortData = [...item].sort((a, b) => {
      return a.width + a.height > b.width + b.height ? 1 : -1;
    });
    setItem(sortData);
  }
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      <ShopButtons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                      />
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <ShopSort
                        LowToHigh={LowToHigh}
                        HighToLow={HighToLow}
                        largeToSmall={largeToSmall}
                        smallToLarge={smallToLarge}
                      />
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="text-left text-xl text-gray-500 border-b border-gray-200 mb-10 pb-5">
                  Categories
                </h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  <ShopButtons
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}
                  />
                </ul>
              </form>
              {/* Product grid */}
              {/* Replace with your content */}
              {/* <h2 id="products-heading" className='text-5xl text-gray-500 pb-5'>
                    Products
                </h2> */}
              <div className="lg:col-span-3">
                <div className="rounded-lg border-4 border-dashed border-gray-200">
                  <div className="container mx-auto space-y-2 lg:space-y-0 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
                    {getCurrentTableData().map((product, index) => {
                      return (
                        <div
                          className="w-full rounded hover:shadow-2xl text-left containe relative"
                          key={index}
                        >
                          <div className="containe h-60">
                            <img
                              src={product.img}
                              alt="image"
                              className="image"
                            />
                            <div className="overlay">
                              <Link
                                to={`/Item/${product.id}`}
                                className="button text-white bg-gray-400 p-1 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800"
                              >
                                Show Details
                              </Link>
                            </div>
                          </div>
                          <div className="px-3">
                            <p className="text-gray-800 font-normal mt-2 mb-5">
                              {product.title}
                            </p>
                            <button
                              type="button"
                              className="bg-gradient-to-r from-red-800 to-gray-300 text-gray-50 hover:bg-gradient-to-l hover:from-red-800 hover:to-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2"
                            >
                              {product.price} $
                            </button>
                          </div>
                          {product.offer ? (
                            <div className="bg-red-600 rounded-full absolute w-12 top-1.5 right-1.5 flex justify-center items-center offer">
                              <p className="text-white my-2.5">Offer</p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Pagination
                  tableRowsPerPage={tableRowsPerPage}
                  totalData={item.length}
                  paginateData={paginateData}
                />
              </div>
            </div>
            {/* /End replace */}
          </section>
        </main>
      </div>
    </div>
  );
}
