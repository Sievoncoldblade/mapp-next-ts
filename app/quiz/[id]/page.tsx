import QuestionForm from "@/components/quiz/question-form";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

const quizWithQuestionsWithOptions = Prisma.validator<Prisma.QuizArgs>()({
  include: {
    questions: {
      include: {
        options: true,
      },
    },
  },
});

const questionsWithOptions = Prisma.validator<Prisma.QuestionArgs>()({
  include: {
    options: true,
  },
});

export type QuizWithQuestionsWithOptions = Prisma.QuizGetPayload<typeof quizWithQuestionsWithOptions>;
export type QuestionsWithOptions = Prisma.QuestionGetPayload<typeof questionsWithOptions>;

const Quiz = async () => {
  const quiz = await prisma.quiz.findFirst({
    include: {
      questions: {
        include: {
          options: true,
        },
      },
    },
  });

  return (
    <div className='flex flex-col h-[90vh]'>
      <nav className='flex bg-primary max-w-fit w-fit mt-5 gap-5 p-4 self-center rounded-full justify-center '>
        <Link href='/' className='items-center flex w-5 rounded bg-primary text-primary-foreground'>
          <FaArrowLeft />
        </Link>
        <div className='text-primary-foreground text-xl'>{quiz?.title}</div>
        <Link href='/' className='items-center flex w-5 rounded bg-primary text-primary-foreground'>
          <FaTimes />
        </Link>
      </nav>
      <QuestionForm quiz={quiz!} />
    </div>
  );
};

export default Quiz;

// (property) questions: ({
//   options: (GetResult<{
//       id: number;
//       title: string;
//       isAnswer: boolean;
//       questionId: number | null;
//   }, unknown> & {})[];
// } & GetResult<{
//   id: number;
//   title: string;
//   quizId: number | null;
//   optionId: string;
// }, unknown> & {})[] | undefined

// type Questions = {
//   options: (GetResult<{
//       id: number;
//       title: string;
//       isAnswer: boolean;
//       questionId: number | null;
//   }, unknown> & {})[];
// } & GetResult<{
//   id: number;
//   title: string;
//   quizId: number | null;
//   optionId: string;
// }, unknown> & {}
