import React from "react";

const Navbar = () => {
  return (
    <nav
      className="bg-white py-2 shadow-lg rounded-full w-1/2 mx-auto mb-1 border-black border"
      style={{
        boxShadow: "2px 2px 0 rgba(2, 2, 2, 1)", // Shadow 2px down and 2px left in complete black
      }}
    >
      <div className="container  flex justify-center px-4">
        <div className="flex justify-around w-full px-8  items-center">
          <a href="#" className="text-sm font-Reg">
            Home
          </a>
          <a href="#" className="text-sm font-Reg">
            Contact
          </a>
          <a href="#" className="text-sm font-Reg">
            Dictionary
          </a>
          <a href="#" className="text-sm font-Reg">
            Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
