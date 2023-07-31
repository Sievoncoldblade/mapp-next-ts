"use client";

import Image from "next/image";
import React from "react";

import photo from "@/assets/profile.jpg";
import Link from "next/link";
import { Session } from "next-auth";

const Navbar = ({ session }: { session: Session | null }) => {
  return (
    <>
      {session && (
        <nav className='navbar h-24 gap-3 px-4 bg-white shadow-md'>
          <div className='flex-1'>
            <div>
              <p className='text-2xl font-bold text-neutral'>{`Hi, ${session && session.user.name.split(" ", 1)}!`}</p>
              <p className='text-sm'>Grade 1</p>
            </div>
          </div>
          <div className='flex-none gap-2'>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='border-2  rounded-full'>
                  <Image className='' src={session.user.image || photo} alt='profile photo' width={100} height={100} />
                </div>
              </label>
              <ul tabIndex={0} className='menu menu-lg bg-base-100 dropdown-content dropdown-left mt-9 z-[1] p-2 shadow rounded-box w-52'>
                {/* <li>
                  <a>Settings</a>
                </li> */}
                <li>
                  <Link href='/api/auth/signout'>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
