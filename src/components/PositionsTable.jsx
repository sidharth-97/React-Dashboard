import React from 'react'

const PositionsTable = () => {
  return (
    <div className="flex flex-col gap-2">
    <h1>Positions</h1>
    <div className="bg-black p-3">
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
              <th scope="col" className="px-6 py-3 min-w-52">
                Info
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className=" px-6 py-3" colSpan="2"></th>
            </tr>
          </thead>
          <tbody className="text-white border">
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
                <form className="border border-[#D175B6] rounded-lg">
                  <select
                    id="countries"
                    className="bg-transparent border border-[#D175B6] text-gray-300 text-sm rounded-lg focus:ring-[#D175B6] focus:border-[#D175B6] block w-full p-2.5"
                  >
                    <option selected>Select Contractor</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </td>
            </tr>
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
                    <option selected>Select Contractor</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </td>
            </tr>
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
                    <option selected>Select Contractor</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default PositionsTable