import React from "react";
import pin from "../assets/Images/pinicon.svg";

const Footer = ({ currentPage }) => {
  return (
    <div className="w-100 bg-black text-white font-Reg py-4 text-center text-sm">
      <p className="flex flex-row justify-center mb-2">
        <img src={pin} className="w-4 h-4 mr-1" alt="Pin Icon"></img>You are
        currently at {currentPage} Page.
      </p>
      <p>
        Built by{" "}
        <a
          href="https://github.com/hemanthk04/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Hemanth Kapalavai
        </a>{" "}
        in 2024
      </p>
    </div>
  );
};

export default Footer;
