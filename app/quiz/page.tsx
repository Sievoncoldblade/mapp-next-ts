"use client";

import NavButton from "@/components/dashboard/nav-button";
import { ModeToggle } from "@/components/ui/toggle-dark-mode";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import QuizCard from "@/components/dashboard/quiz-card";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";

const Quizzes = () => {
  const { data: session, status } = useSession();
  if (status == "authenticated") {
    return (
      <div className='flex flex-col min-h-screen relative p-5 gap-6'>
        <div className='absolute bottom-5 right-5'>
          <ModeToggle />
        </div>

        <div className='flex max-w-fit'>
          <NavButton session={session} />
        </div>
        <div className='px-2'>
          <Button asChild className='space-x-3'>
            <Link href='/'>
              <ArrowLeftCircle />
              <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Go back</h2>
            </Link>
          </Button>
        </div>
        <ScrollArea className=''>
          <div className='grid grid-rows-4 grid-flow-col gap-4'>
            <QuizCard classroom='Grade 1' quiz='Learning Modern Architecture' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Adulthood 101' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='NextJS Prisma TRPC Full-Stack' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Making Superconductor for Kids' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Learning Modern Architecture' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Adulthood 101' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='NextJS Prisma TRPC Full-Stack' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Making Superconductor for Kids' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Learning Modern Architecture' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Adulthood 101' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='NextJS Prisma TRPC Full-Stack' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Making Superconductor for Kids' link='/quiz/32' />
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <Separator />
      </div>
    );
  }
};

export default Quizzes;
