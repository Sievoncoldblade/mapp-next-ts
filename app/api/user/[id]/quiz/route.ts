import prisma from "@/lib/prisma";
import { Option, Prisma, Quiz } from "@prisma/client";
import { NextResponse } from "next/server";

const quizWithQuestionsWithOptions = Prisma.validator<Prisma.QuizDefaultArgs>()({
  include: {
    questions: {
      include: {
        options: true,
      },
    },
  },
});

export type QuizWithQuestionsWithOptions = Prisma.QuizGetPayload<typeof quizWithQuestionsWithOptions>;

export async function POST(request: Request) {
  try {
    const data: QuizWithQuestionsWithOptions = await request.json();

    const quiz = await prisma.quiz.create({
      data: {
        title: data.title,
        author: {
          connect: {
            id: data.userId,
          },
        },
        questions: {
          create: [],
        },
      },
    });
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}
