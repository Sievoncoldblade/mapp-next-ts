import OnboardingCarousel from "@/components/OnboardingCarousel";
import SignInWithEmailButton from "@/components/SignInWithEmailButton";
import SignInWithGoogleButton from "@/components/SignInWithGoogleButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "./user";

export default async function Home() {
  const session = getServerSession(authOptions);
  return (
    <main className='flex flex-col items-center '>
      <h2>Server Session</h2>
      <pre>{await session.then((res) => JSON.stringify(res))}</pre>
      <h2>Client Session</h2>
      <User />
      {/* <OnboardingCarousel /> */}
      {/* <SignInWithGoogleButton /> */}
    </main>
  );
}
