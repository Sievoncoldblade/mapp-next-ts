import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({ where: { id: session?.user.id } });
  const isFirstTimeLogin = !user?.gradeLevel;

  if (session) {
    if (isFirstTimeLogin) {
      return redirect("/user-form");
    } else {
      return redirect("/dashboard");
    }
  } else {
    redirect("/landing");
  }
};

export default Page;
