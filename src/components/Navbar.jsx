import React from "react";
import { TbAlertSquare } from "react-icons/tb";
import { GoBell } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-screen gap-4 text-white p-5">
      <div>
        <TbAlertSquare className=" text-2xl" />
      </div>
      <div className="mt-1">
        <span class="relative inline-block ">
          <GoBell className="text-2xl" />
          <span class="absolute top-1 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-[#D175B6] rounded-full"></span>
        </span>
      </div>
      <div>
        <h1>
          Hi,<span className=" text-green-500">Muhammed Arshad</span>
        </h1>
        <h2>Welcome Back!</h2>
      </div>
      <div className="border-2 rounded-full border-[#D175B6] bo">
        <img
          className="rounded-full w-10"
          src="https://s3-alpha-sig.figma.com/img/e632/dc20/86efa3df337e8c215dd8095476bb6513?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFqlhwvjeNI1Xfu7aFAjXVfsYIwCvphIiyCeiL33XW-x0ODGkAMScsTAFCg1vkHWTCP34gj9hPEh-bIi~msQhLlxsFNcMoyJctcaW4iLes5icssB0PslquKW-wO1Du9PLzjrP61yQN0ZVv24hlBZbP2SQVeYuWibXG6KEUDO~HkEu66R495e3elUT4OUBhdkAsiJH8smrIkiAOzxjTu-XwcBK0YVcyA-qJETyo32adRXj1UFCXfchiK3xYWBzKl7N5-kA4c310NQdRd4A3Ul8eX25AdT~Y7N1Mh73QAwZULoNw6UkgPaSfm55qN2aVwNkP-umVZXiBjvb687lzBRAw__"
          alt=""
        />{" "}
      </div>
    </div>
  );
};

export default Navbar;
