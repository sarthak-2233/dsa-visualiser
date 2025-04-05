import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const YoutubeDetail = () => {
  const fruits = {
    apple: {
      name: "Coder Army (aka Rohit Negi)",
      description:
        "Coder Army is a dynamic YouTube channel founded by Rohit Negi, a passionate developer on a mission to inspire and guide the next generation of coders. The channel features hands-on tutorials, full-stack projects, coding challenges, and tech insights — all aimed at helping viewers build real skills and confidence in the world of development. Whether you're just starting out or looking to sharpen your edge, Coder Army is your go-to destination for practical, no-fluff programming content",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",

        video1:"",
        video2:"",
        video3:"",
    },
    banana: {
      name: "Love Babbar",
      description: "Bananas are yellow, soft, and rich in potassium.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
        video1:"https://www.youtube.com/watch?v=V3vM_m2iFtk   ",
        video2:"",
        video3:"",
    },
    mango: {
      name: "Striver",
      description: "Mangoes are tropical, sweet, and super tasty.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
        video1:"",
        video2:"",
        video3:"", 
    },
  };

  const [selectedFruit, setSelectedFruit] = useState("apple");
  return (
    <div className="flex mt-2 h-full bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Recommended Channels </h2>
        <ul>
          {Object.keys(fruits).map((fruit) => (
            <li
              key={fruit}
              onClick={() => setSelectedFruit(fruit)}
              className={`cursor-pointer p-2 rounded mb-2 ${
                selectedFruit === fruit ? "bg-blue-200" : "hover:bg-gray-200"
              }`}
            >
              {fruits[fruit].name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        <div className="flex md:flex-row items-end gap-4">
          <img
            src={fruits[selectedFruit].image}
            alt={fruits[selectedFruit].name}
            className="w-32 h-32 object-cover rounded-xl shadow-md"
          />

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-400 text-2xl" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-400 text-2xl" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-pink-400 text-2xl" />
          </a>
        </div>
    
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">
            {fruits[selectedFruit].name}
          </h2>
          <p className="text-gray-700 text-lg">
            {fruits[selectedFruit].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YoutubeDetail;

{
}
