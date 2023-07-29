import OnboardingCarousel from "@/components/OnboardingCarousel";
import SignInWithEmailButton from "@/components/SignInWithEmailButton";
import SignInWithGoogleButton from "@/components/SignInWithGoogleButton";

export default function Home() {
  return (
    <main className='flex flex-col items-center '>
      <OnboardingCarousel />
      <SignInWithGoogleButton />
    </main>
  );
}
