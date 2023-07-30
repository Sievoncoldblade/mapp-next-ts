"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import photo from "@/assets/profile.jpg";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {status == "authenticated" && (
        <div className='p-2'>
          <div className='navbar bg-base-300 text-base-300-content rounded-3xl'>
            <div className='flex-1'>
              <Link href='/' className='btn btn-ghost normal-case text-xl'>
                {`Hi, ${session && session.user.name.split(" ", 1)}!`}
              </Link>
            </div>
            <div className='flex-none gap-2'>
              <div className='dropdown dropdown-end '>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                  <div className='w-10 rounded-full'>
                    <Image src={session.user.image || photo} alt='profile photo' width={100} height={100} />
                  </div>
                </label>
                <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52'>
                  <li>
                    <a className='justify-between'>
                      Profile
                      <span className='badge badge-primary'>New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link href={"/api/auth/signout"}>Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
