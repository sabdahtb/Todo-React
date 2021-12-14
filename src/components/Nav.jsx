import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="Nav w-full p-5 flex bg-gray-200 items-center justify-between">
      <div className="kiri w-40">
        <p className="judul font-semibold text-2xl">React TODO</p>
      </div>
      <div className="kanan w-80">
        <ul className="flex justify-around">
          <li className=" cursor-pointer hover:text-red-600">
            <Link to="/"> To-do </Link>
          </li>
          <li className=" cursor-pointer hover:text-red-600">
            <Link to="/add"> Add </Link>
          </li>
          <li className=" cursor-pointer hover:text-red-600">
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
