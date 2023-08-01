"use client";

import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession();

  if (status == "authenticated") {
    return redirect("/dashboard");
  } else {
    redirect("/landing");
  }
};

export default Page;
