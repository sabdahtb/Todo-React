import React from "react";

export const About = () => {
  return (
    <div className="about w-max p-5">
      <h1 className="judul font-semibold text-xl">About</h1>
      <h1 className="judul font-semibold text-sm mt-5">
        What I use for my project is : <br />
        React JS and Tailwind CSS <br />
        For alert i use SweetAlert 2
      </h1>
      <div className="pages mt-10">
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-sm text-blue-800 italic"
        >
          Click to React JS Home Page
        </a>
        <br />
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-sm text-green-700 italic"
        >
          Click to Tailwind CSS Home Page
        </a>{" "}
        <br />
        <a
          href="https://sweetalert2.github.io/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-sm text-red-500 italic"
        >
          Click to SweetAlert 2 Home Page
        </a>
      </div>
    </div>
  );
};
