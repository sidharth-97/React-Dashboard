import React from "react";
import Selector from "./UI/Selector";
import { PiStarFourFill } from "react-icons/pi";
import PositionsTable from "./PositionsTable";

const EventDetails = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg filter bg-black bg-opacity-40 text-white border border-spacing-3 border-[#D175B6] w-3/4 p-5">
      <div className="flex items-end gap-2 mb-4">
        <h1 className=" text-3xl font-bold">Event Name</h1>
        <span className=" text-base">(Venue Details)</span>
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
            <h1 className="mb-2 mt-1 text-lg font-medium">
              Assign Coordinator
            </h1>

            <form className=" text-[#D175B6]">
              <select
                id="countries"
                className="bg-transparent border border-gray-300 text-white text-sm rounded-l focus:ring-[#D175B6] focus:border-[#D175B6] block w-full p-2.5"
              >
                <option selected className="  bg-black text-[#D175B6]">Select Coordinator</option>
                <option value="1" className="  bg-black text-[#D175B6]">1</option>
                <option value="2" className="  bg-black text-[#D175B6]">2</option>
                <option value="3" className="  bg-black text-[#D175B6]">3</option>
                <option value="4" className="  bg-black text-[#D175B6]">4</option>
              </select>
            </form>
            <p className="text-[#D175B6] text-sm mt-1">Add New Coordinator</p>
          </div>
          <div className="w-1/2">
            <h1 className="mb-2 text-lg font-medium">
              Event Name{" "}
              <span className=" text-sm font-normal">(Venue Details)</span>
            </h1>
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
        <h1 className=" text-lg font-medium">Assign Contractor</h1>
        <div className="flex justify-between gap-2">
          <div className="bg-black p-3 flex flex-col gap-3 border border-[#D175B6] w-80">
          <div className="p-2 hover:bg-[#D175B6] rounded-md border border-[#D175B6]">
              <div className="flex gap-1">
              <p className="text-lg font-medium">Meeting Room 1</p>
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
              <p className="text-lg font-medium">Meeting Room 1</p>
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
              <p className="text-lg font-medium">Meeting Room 1</p>
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
          </div>
          <PositionsTable />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
