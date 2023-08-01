"use client";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ModeToggle } from "@/components/ui/toggle-dark-mode";
import NavButton from "@/components/dashboard/nav-button";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import QuizCard from "@/components/dashboard/quiz-card";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

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
            <Link href='/quiz'>
              <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Quizzes</h2>
              <ArrowRightCircle />
            </Link>
          </Button>
        </div>
        <ScrollArea className=''>
          <div className='flex flex-row gap-4'>
            <QuizCard classroom='Grade 1' quiz='Learning Modern Architecture' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Adulthood 101' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='NextJS Prisma TRPC Full-Stack' link='/quiz/32' />
            <QuizCard classroom='Grade 1' quiz='Making Superconductor for Kids' link='/quiz/32' />
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <Separator />
        <div className='px-2'>
          <Button asChild className='space-x-3'>
            <Link href='/'>
              <h2 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Classroom</h2>
              <ArrowRightCircle />
            </Link>
          </Button>
        </div>
        <Card className='flex items-center hover:bg-secondary active:bg-secondary min-h-[20vh] md:min-h-[25vh] md:w-[40vw]'>
          <Link href={"/"}>
            <CardHeader>
              <CardTitle>Grade 1 Maharlika</CardTitle>
              <CardDescription>Teacher Filemon C. Limosa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='bg-muted inline py-2 px-4 rounded-full'>32 quizzes remaining</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    );
  }
  router.push("/");
  return <></>;
};

export default Dashboard;
