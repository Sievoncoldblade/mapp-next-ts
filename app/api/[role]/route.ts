import prisma from "@/lib/prisma";
import { Roles } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { role: Roles } }) {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: params.role,
      },
    });

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}
