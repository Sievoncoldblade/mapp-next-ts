import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import UserForm from "@/components/user-form";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({ where: { email: session?.user.email } });
  const isFirstTimeLogin = !user?.gradeLevel;

  if (session && isFirstTimeLogin) {
    return <UserForm />;
  }
  return redirect("/");
};

export default Page;
