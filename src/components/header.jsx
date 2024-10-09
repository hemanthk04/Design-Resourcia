import React from "react";
import Navbar from "./Navbar";
import ai from "../assets/images/ai2.svg"; 
import Bandbar from "./band";


const Header = () => {
  return (
    <header className="h-1/2 text-center py-4 bg-grid-pattern shadow-lg rounded-bl-[20px] rounded-br-[20px]">
      <Navbar />
      <Bandbar/>
      <h1 className="text-6xl font-SB text mb-2 ">Design Resourcia</h1>
      <p className="text font-Reg mb-8 mt-2">Search for your Design Resources</p>
      <div className="relative mx-auto w-2/3 lg:w-1/3 mb-1">
        <input
          type="text"
          className="border border-black pl-[16px] w-full py-3 rounded-[2px] text-sm font-Reg focus:outline-none"
          placeholder="Search for 'Poppins'"
        />
        <button className="absolute right-0 top-0 bottom-0 mr-0 px-6 py-2  rounded-tr-[2px] rounded-br-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 101 101"
            id="search"
            className="w-7 h-7"
            style={{ strokeWidth: "0.5", fill: "black", stroke: "black" }}
          >
            <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
          </svg>
        </button>
        <div
          className="absolute top-0 right-0 border-black rounded-full border"
          style={{
            top: "-15px", // Pushes part of the icon outside the header
            right: "-15px", // Pushes part of the icon outside the header
          }}
        >
          <img src={ai} className="w-8 h-8 z-3"></img>
        </div>
      </div>
      <p className="mb-10 text-xs font-Reg text-gray-800">Search Powered by Gemini-AI</p>
    </header>
  );
};

export default Header;
