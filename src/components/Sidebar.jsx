import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" text-white ps-5 rounded-lg bg-black bg-opacity-20">
      <div className="border p-4 rounded-lg border-[#D175B6] flex flex-col min-h-full justify-between">
        <ul className="tree">
          <p className="parent">
            <details>
              <summary className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg p-3">
                Events
              </summary>
              <ul className="">
                <li className="">
                 <Link to={"/new-requests"}><span className="p-2 w-full hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg ">New Request</span> </Link>
                </li>
                <li className="">
                  <span className="p-1 hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg flex justify-around">
                    <p>Estimate</p>
                    <div className="bg-white text-[#D175B6] rounded-full w-6 text-center ">9</div>
                  </span> 
                </li>
                <li >
                <span className="p-2 hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg ">Events</span> 
                </li>
                <li>
                <span className="p-2 hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg ">Partial Requests</span> 
                </li>
              </ul>
            </details>
          </p>

          <p className="parent">
            {" "}
            <details>
              <summary className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg p-3">
                Positions
              </summary>
              <ul></ul>
            </details>
          </p>

          <p className="parent">
            <details>
              <summary className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg p-3">
                Contractors
              </summary>
              <ul></ul>
            </details>
          </p>

          <p className="parent">
            {" "}
            <details>
              <summary className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg p-3">
                Users
              </summary>
              <ul>
                <li >
                <span className="p-2 hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg ">Admin</span> 
                </li>
                <li>
                <span className="p-2 hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg">Clients</span> 
                </li>
                <li >
                <span className="p-2 hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg ">Coordinators</span> 
                </li>
              </ul>
            </details>
          </p>
        </ul>
        <div className="flex justify-center items-center gap-2 bg-black rounded-md p-2">
          <div className=" transform scale-x-[-1] ">
            <IoExitOutline className=" text-lg"/>
          </div>

          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
