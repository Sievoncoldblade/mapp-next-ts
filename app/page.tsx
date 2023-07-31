import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  } else {
    redirect("/landing");
  }
};

export default Page;
