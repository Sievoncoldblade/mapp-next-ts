import OnboardingCarousel from "@/components/OnboardingCarousel";
import SignInWithEmailButton from "@/components/SignInWithEmailButton";
import SignInWithGoogleButton from "@/components/SignInWithGoogleButton";

export default function Landing() {
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
