import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import usePagination from './hooks/usePagination';
import { GoDotFill } from "react-icons/go";


const PositionsTable = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  const {
    currentPage,
    rowsPerPage,
    visibleElements,
    pageRange,
    handlePageChange,
  } = usePagination(data, 5);
  return (
    <div className="flex flex-col gap-2 ">
    <h1 className='text-lg font-medium'>Positions</h1>
    <div className="bg-black border border-spacing-3 border-[#D175B6]">
      <div>
        <table className="w-full text-sm text-left rtl:text-right text-white ">
          <thead className="text-xs uppercase text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3 min-w-40">
                Info
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className=" px-6 py-3" colSpan="2"></th>
            </tr>
          </thead>
            <tbody className="text-white border">
              {visibleElements.map((item) => (
                <tr className="border-b border border-spacing-3 border-[#D175B6] p-2">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Camera 1(Video)
                  </th>
                  <td className="px-6 py-4">9 am - 7 pm</td>
                  <td className="px-6 py-4">LP default</td>
                  <td className="px-6 py-4">20</td>
                  <td className="px-6 py-4">
                    <form className="">
                      <select
                        id="countries"
                        className="bg-transparent border border-[#D175B6] text-gray-300 text-sm rounded-lg focus:ring-[#D175B6] focus:border-[#D175B6] block w-full p-2.5"
                      >
                        <option selected className=' bg-black text-[#D175B6]"'>Select Contractor</option>
                        <option value="1" className=" bg-black text-[#D175B6]">1</option>
                        <option value="2" className="  bg-black text-[#D175B6]">2</option>
                        <option value="3" className="  bg-black text-[#D175B6]">3</option>
                        <option value="4" className="  bg-black text-[#D175B6]">4</option>
                      </select>
                    </form>
                  </td>
                </tr>
              ))}
          </tbody>
          </table>
          <div className="flex justify-center mt-4 bg-black text-white items-center mb-1">
      <FaArrowLeftLong className={`${currentPage === 1 && "hidden"}`} onClick={() => handlePageChange((prev) => prev - 1)} />
        {pageRange.map((page) => (
          <>
              <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-2 py-1 mx-1 rounded ${
              currentPage === page
                ? " text-[#D175B6]"
                : " text-white"
            }`}
          >
            <GoDotFill/>
          </button>
          </>
        ))}
        <FaArrowRightLong className={`${currentPage >= data.length-currentPage*rowsPerPage && "hidden"}`} onClick={() => handlePageChange((prev) => prev + 1)}/>
      </div>
      </div>
    </div>
  </div>
  )
}

export default PositionsTable