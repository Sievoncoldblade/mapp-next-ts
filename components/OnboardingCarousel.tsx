"use client";

import React from "react";

import Knowledge from "@/assets/knowledge.svg";
import Learning from "@/assets/learning.svg";
import Quiz from "@/assets/quiz.svg";
import OnboardingCard from "./OnboardingCard";

function OnboardingCarousel() {
  return (
    <div className='carousel rounded-box mt-12'>
      <OnboardingCard
        alt='knowledge'
        title='Unlock the Secrets of Etiquette!'
        description="Discover a treasure trove of knowledge on good manners and right conduct in our app's comprehensive lessons and articles."
        image={Knowledge}
        key='1'
      />
      <OnboardingCard
        alt='learning'
        title='Polish Your Persona with Interactive Lessons!'
        description='Dive into engaging and interactive lessons that make learning about manners and conduct a delightful experience.'
        image={Learning}
        key='2'
      />
      <OnboardingCard
        alt='quiz'
        title='Test Your Etiquette IQ with Mind-Boggling Quizzes!'
        description='Challenge yourself with fun-filled quizzes that put your manners and conduct knowledge to the ultimate test.'
        image={Quiz}
        key='3'
      />
    </div>
  );
}

export default OnboardingCarousel;
