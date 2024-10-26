import React, { useState } from "react";
import { FaArrowCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <div className=" shadow-lg rounded-lg p-6 mb-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-400 bg-green-300">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold  text-gray-800">{title}</h3>
        <button
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-red-600 transition duration-200"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <FaArrowAltCircleUp size={20} /> : <FaArrowCircleDown size={20} />}
        </button>
      </header>
      {showInfo && (
        <p className="mt-4 text-gray-700 leading-relaxed hover:bg-blue-300 hover:rounded-lg">
          {info}
        </p>
      )}
    </div>
  );
}

export default Question;
