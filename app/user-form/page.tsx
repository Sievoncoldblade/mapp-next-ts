import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const UserForm = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({ where: { id: session?.user.id } });
  const isFirstTimeLogin = !user?.gradeLevel;
  if (session && isFirstTimeLogin) {
    return (
      <div>
        <p>user form</p>
      </div>
    );
  }
  return redirect("/");
};

export default UserForm;
