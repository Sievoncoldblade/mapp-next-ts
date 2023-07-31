import QuestionForm from "@/components/quiz/question-form";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
const Quiz = () => {
  return (
    <div className='flex flex-col h-[90vh]'>
      <nav className='flex bg-primary max-w-fit w-fit mt-5 gap-5 p-4 self-center rounded-full justify-center '>
        <Link href='/' className='items-center flex w-5 rounded bg-primary text-primary-foreground'>
          <FaArrowLeft />
        </Link>
        <div className='text-primary-foreground text-xl'>Learning Modern Architect</div>
        <Link href='/' className='items-center flex w-5 rounded bg-primary text-primary-foreground'>
          <FaTimes />
        </Link>
      </nav>
      <QuestionForm />
    </div>
  );
};

export default Quiz;
