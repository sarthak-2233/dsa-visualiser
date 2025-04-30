import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

const DashboardSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} h-screen relative bg-purple-950 transition-all duration-300`}>
        <img
          src="/Images/rightarrow.png"
          alt="arrow-menu"
          className={`
            absolute right-8 top-8
            w-7 cursor-pointer rounded-full border-2 border-white
            ${!open ? "rotate-180" : ""}
          `}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className="p-6 text-2xl font-semibold flex-1 h-screen">
        <h1>Home page</h1>
      </div>
    </div>
  );
};

export default DashboardSidebar;
