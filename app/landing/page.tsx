import OnboardingCarousel from "@/components/OnboardingCarousel";
import SignInWithEmailButton from "@/components/SignInWithEmailButton";
import SignInWithGoogleButton from "@/components/SignInWithGoogleButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Landing() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <main className='flex flex-col items-center justify-center mt-20 '>
        <OnboardingCarousel />
        <div className='flex md:flex-none items-center justify-center flex-col gap-4 mt-10'>
          <SignInWithGoogleButton />
          <SignInWithEmailButton />
        </div>
      </main>
    );
  }

  return redirect("/");
}
