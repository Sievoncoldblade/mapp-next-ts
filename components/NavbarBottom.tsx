"use client";

import React, { useState } from "react";
import { FaHome, FaPlusCircle, FaUserCog } from "react-icons/fa";
const NavbarBottom = () => {
  const [activeButton, setActiveButton] = useState<number>();

  const handleClick = () => {};

  return (
    <div className='btm-nav rounded'>
      <button onClick={() => setActiveButton(1)} className={`${activeButton == 1 && "active"} hover:bg-base-200 active:bg-base-300 transition-colors`}>
        <FaHome className='w-16' />
      </button>
      <button onClick={() => setActiveButton(2)} className={`${activeButton == 2 && "active"} hover:bg-base-200 active:bg-base-300 transition-colors`}>
        <FaPlusCircle className='w-16' />
      </button>
      <button onClick={() => setActiveButton(3)} className={`${activeButton == 3 && "active"} hover:bg-base-200 active:bg-base-300 transition-colors`}>
        <FaUserCog className='w-16' />
      </button>
    </div>
  );
};

export default NavbarBottom;
