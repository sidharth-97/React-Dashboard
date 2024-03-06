import React from "react";
import Selector from "./UI/Selector";
import { PiStarFourFill } from "react-icons/pi";
import PositionsTable from "./PositionsTable";

const EventDetails = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg filter bg-black bg-opacity-20 text-white border border-spacing-3 border-[#D175B6] w-3/4 p-5">
      <div className="flex justify-between mb-4">
        <h1 className=" text-3xl font-bold">Event Name (venue details)</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div class="inline-flex rounded-md shadow-sm">
          <a
            href="#"
            aria-current="page"
            class="px-4 py-2 text-sm font-medium text-[#D175B6] border border-[#D175B6] rounded-s-lg hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
          >
            EventDetails
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium  border-t text-[#D175B6] border-b border-r border-[#D175B6] hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
          >
            Align Coordinator/Coordinator
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium  border-t text-[#D175B6] border-b border-[#D175B6] hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
          >
            Session Management
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium  border text-[#D175B6] border-[#D175B6] rounded-e-lg hover:bg-[#D175B6] focus:z-10 focus:ring-2 focus:text-white hover:text-white"
          >
            Generate SOW
          </a>
        </div>
        <div className="flex w-full gap-4">
          <div className="w-1/2">
            <h1 className="mb-2 mt-1">Assign Coordinator</h1>

            <form className=" text-[#D175B6]">
              <select
                id="countries"
                className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <p className="text-[#D175B6] text-sm">Add New Coordinator</p>
          </div>
          <div className="w-1/2">
            <h1 className="mb-2">Event Name(Venue Here)</h1>
            <div className="flex flex-col gap-2">
              <div className="border-[#D175B6] border rounded-md flex p-1 w-full">
                <p className="w-1/2">Start:12-12-2023</p>
                <p className="w-1/2">End:15-12-2023</p>
              </div>
              <div className="border-[#D175B6] border rounded-md p-1">
                <p>
                  Venue Address:
                  <span className=" font-semibold">
                    Some location 12, Name Here,City,State
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="">Assign Contractor</h1>
        <div className="flex justify-between">
          <div className="bg-black p-3 flex flex-col gap-3 border border-[#D175B6]">
            <div className="p-2 hover:bg-[#D175B6] rounded-md border border-[#D175B6]">
              <div className="flex">
                <p>Meeting Room 1</p>
                <p className="text-black">12 Positions</p>
              </div>
              <p className=" text-xs">
                Start from 12 Jan,2023-End at 15 Jan,2023
              </p>
            </div>
            <div className="p-2 hover:bg-[#D175B6] rounded-md border border-[#D175B6]">
              <div className="flex">
                <p>Meeting Room 1</p>
                <div className="mt-1">
                  {" "}
                  <PiStarFourFill className="text-[#D175B6]" />
                </div>

                <p className="hover:text-black text-[#D175B6]">12 Positions</p>
              </div>
              <p className=" text-xs">
                Start from 12 Jan,2023-End at 15 Jan,2023
              </p>
            </div>
            <div className="p-2 hover:bg-[#D175B6] rounded-md border border-[#D175B6]">
              <div className="flex">
                <p>Meeting Room 1</p>
                <p className="text-black">12 Positions</p>
              </div>
              <p className=" text-xs">
                Start from 12 Jan,2023-End at 15 Jan,2023
              </p>
            </div>
          </div>
       <PositionsTable/>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
