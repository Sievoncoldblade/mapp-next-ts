import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Data {
  score: number;
  userId: string;
  quizId: number;
}

export async function POST(request: Request) {
  try {
    const { score, userId, quizId }: Data = await request.json();
    const result = await prisma.quizManager.create({
      data: {
        score: score,
        quizId: quizId,
        userId: userId,
      },
    });
    return new NextResponse(JSON.stringify({ result }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
}
