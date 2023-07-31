import { Roles } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { role: Roles; id: string } }) {
  try {
    const body = await request.formData();
    console.log(params);
    console.log(body);
    return new NextResponse(JSON.stringify(body), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err), { status: 400 });
  }
}
