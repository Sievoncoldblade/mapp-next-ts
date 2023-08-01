import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string; quizId: number } }) {
  console.log(params);
  try {
    return new NextResponse(JSON.stringify({}), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 400 });
  }
}
