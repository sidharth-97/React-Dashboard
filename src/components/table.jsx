import React from "react";

const Table = () => {
    
  return (
    <div className="relative overflow-x-auto rounded-lg filter backdrop-filter backdrop-blur-3xl text-white border border-spacing-3 border-pink-500 w-3/4">
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
      <table className="w-full text-sm text-left rtl:text-right text-white ">
        <thead className="text-xs uppercase text-white bg-[#D175B6]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Event Name
            </th>
            <th scope="col" className="px-6 py-3">
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
            <th scope="col" className="px-6 py-3">
              Venue
            </th>
          </tr>
        </thead>
        <tbody className="text-white border">
          <tr className="border-b border border-spacing-3 border-pink-500 p-2">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              Filled Name
            </th>
            <td className="px-6 py-4">Jan 12,2024</td>
            <td className="px-6 py-4">Jan 14,2024</td>
            <td className="px-6 py-4">Muhammed Asad</td>
            <td className="px-6 py-4">+5446446542</td>
            <td className="px-6 py-4">kieamcs dfrewwq</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
