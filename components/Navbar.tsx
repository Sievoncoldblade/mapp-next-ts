"use client";

import Image from "next/image";
import React from "react";

import photo from "@/assets/profile.jpg";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {status == "authenticated" && (
        <nav className='navbar h-24 gap-3 px-4 bg-white shadow-md'>
          <div className='flex-1'>
            <div>
              <p className='text-2xl font-bold text-neutral'>{`Hi, ${session && session.user.name.split(" ", 1)}!`}</p>
              <p className='text-sm'>Grade 1</p>
            </div>
          </div>
          <div className='flex-none gap-2'>
            <div className='dropdown dropdown-content '>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='border-2  rounded-full'>
                  <Image className='' src={session.user.image || photo} alt='profile photo' width={100} height={100} />
                </div>
              </label>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
