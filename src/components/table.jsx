import React from "react";
import { useState } from "react";
import usePagination from "./hooks/usePagination";
import "../../style.css";
import { FiEye } from "react-icons/fi";

const Table = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {
    currentPage,
    rowsPerPage,
    visibleElements,
    pageRange,
    handlePageChange,
  } = usePagination(data, 5);
  return (
    <div className="relative overflow-hidden rounded-lg bg-black bg-opacity-20 text-white border border-spacing-3 border-[#D175B6] w-3/4">
      <div className="flex justify-between px-5 py-2 items-center">
        <h1 className=" text-3xl font-bold">Event Request</h1>
        <div>
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="scrollable-body overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-white ">
          <thead className="text-xs uppercase text-white bg-[#D175B6] sticky top-0">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 min-w-52 sticky left-0 bg-[#D175B6]"
              >
                Event Name
              </th>
              <th scope="col" className="px-6 py-3 min-w-52">
                Event Start
              </th>
              <th scope="col" className="px-6 py-3">
                Event End
              </th>
              <th scope="col" className="px-6 py-3">
                Client Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Info
              </th>
              <th scope="col" className="px-6 py-3 min-w-52">
                Venue
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                State
              </th>
              <th scope="col" className="px-6 py-3">
                Zip Code
              </th>
            </tr>
          </thead>
          <tbody className="text-white border">
            {visibleElements.map((item) => (
              <tr className="border-b border border-spacing-3 border-[#D175B6] p-2">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap z-20 bg-black opacity-75"
                >
                  <span className="flex gap-2">
                    <FiEye /> <p>Filled Name</p>
                  </span>
                </td>
                <td className="px-6 py-4">Jan 12,2024</td>
                <td className="px-6 py-4">Jan 14,2024</td>
                <td className="px-6 py-4">Muhammed Asad</td>
                <td className="px-6 py-4">+5446446542</td>
                <td className="px-6 py-4">kieamcs dfrewwq</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {pageRange.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 mx-1 rounded ${
              currentPage === page
                ? "bg-[#D175B6] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
