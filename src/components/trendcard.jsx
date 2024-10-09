import React from "react";

const TrendCard = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col ">
      <img
        src={imageSrc}
        alt={title}
        className="w-64 h-48 object-cover rounded-sm"
      />
      <p className="mt-2 px-1 text-left font-Reg text-sm font-medium">{title}</p>
    </div>
  );
};

export default TrendCard;
