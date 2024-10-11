import React from "react";
import hammer from "../assets/Images/hammer.svg"

const Bandbar = () =>{
    return (
      <div className="w-100 z-2 bg-white mb-14 mt-2 border-[0.5] border-t border-b border-black py-1 bg-yellow-400">
        <p className="font-Reg text-xs text-gray-800 flex flex-row justify-center items-center">
            <img src ={hammer} className="w-3 h-3 rotate-[30deg] mr-1"></img>
          Built using React, MongoDB, Tailwind CSS
        </p>
      </div>
    );
};
export default Bandbar;