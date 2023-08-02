import QuestionForm from "@/components/quiz/question-form";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { ArrowLeftCircle } from "lucide-react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const quizWithQuestionsWithOptions = Prisma.validator<Prisma.QuizDefaultArgs>()({
  include: {
    questions: {
      include: {
        options: true,
      },
    },
  },
});

const questionsWithOptions = Prisma.validator<Prisma.QuestionDefaultArgs>()({
  include: {
    options: true,
  },
});

export type QuizWithQuestionsWithOptions = Prisma.QuizGetPayload<typeof quizWithQuestionsWithOptions>;
export type QuestionsWithOptions = Prisma.QuestionGetPayload<typeof questionsWithOptions>;

const getQuiz = async () => {
  return await prisma.quiz.findFirst({
    include: {
      questions: {
        include: {
          options: true,
        },
      },
    },
  });
};

const Quiz = async () => {
  const session = await getServerSession(authOptions);
  const quiz = await getQuiz();
  return (
    <div className='flex flex-col h-[90vh]'>
      <nav className='flex bg-primary max-w-fit w-fit mt-5 gap-5 p-4 self-center rounded-full justify-between '>
        <Link href='/quiz' className='items-center flex rounded bg-primary text-primary-foreground'>
          <ArrowLeftCircle size={26} />
        </Link>
        <div className='text-primary-foreground text-xl'>{quiz?.title}</div>
      </nav>
      <QuestionForm quiz={quiz!} />
    </div>
  );
};

export default Quiz;
