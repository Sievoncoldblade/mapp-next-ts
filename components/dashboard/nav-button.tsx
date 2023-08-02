import React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session } from "next-auth";
import Link from "next/link";

const NavButton = ({ session }: { session: Session }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='h-auto rounded-full flex gap-4' variant={"outline"}>
          <Avatar className='w-12 h-12'>
            <AvatarImage src={session.user.image} />
            <AvatarFallback>{session.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className='text-left pr-10'>
            <p className='font-bold text-xl text'>Hi, {session.user.name.split(" ", 1)}</p>
            <p className='text-sm'>Grade 1 Student</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        <DropdownMenuItem>
          <Link href='/api/auth/signout'>Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavButton;
