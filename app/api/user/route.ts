import prisma from "@/lib/prisma";
import { Roles } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany();

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}
