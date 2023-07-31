"use client";

import OnboardingCarousel from "@/components/onboarding-carousel";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { MdAlternateEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { ModeToggle } from "@/components/ui/toggle-dark-mode";
import { Badge } from "@/components/ui/badge";

export default function Landing() {
  return (
    <main className='flex flex-col min-h-screen justify-center gap-4'>
      {/* <OnboardingCarousel /> */}
      <div className='absolute top-10 right-10'>
        <ModeToggle />
      </div>
      <div className='flex flex-col items-center p-5 justify-center '>
        <h1 className='relative scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Mabuting Asal
          <Badge className='absolute ml-2' variant={"outline"}>
            App
          </Badge>
        </h1>
        <p className='leading-5 text-sm [&:not(:first-child)]:mt-7 text-center uppercase'>where learning right conduct becomes an engaging adventure</p>
      </div>
      <div className='grid grid-flow-row items-center justify-center gap-2'>
        <Button variant={"default"} size={"lg"} onClick={() => signIn("google")}>
          <FaGoogle className='mr-2' />
          Sign in with Google
        </Button>
        <Button variant={"secondary"} size={"lg"} onClick={() => signIn()}>
          <MdAlternateEmail className='mr-2' />
          Sign in with Email
        </Button>
      </div>
    </main>
  );
}
