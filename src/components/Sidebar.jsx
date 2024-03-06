import React from "react";
import { IoExitOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="h-screen bg-transparent text-white ps-5 rounded-lg bg-black bg-opacity-20">
      <div className="border p-4 rounded-lg border-[#D175B6] flex flex-col h-screen">
        <ul className="tree">
          <p className="parent">
            <details>
              <summary className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg p-3">
                Events
              </summary>
              <ul>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg ">
                  New Request
                </li>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg">
                  Estimate
                </li>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg">
                  Events
                </li>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg">
                  Partial Request
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
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg">
                  Admin
                </li>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg">
                  Clients
                </li>
                <li className=" hover:border hover:border-[#D175B6] hover:text-[#D175B6] rounded-lg">
                  Coordinators
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
