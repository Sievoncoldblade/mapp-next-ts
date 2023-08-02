"use client";

import React, { useState } from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { QuizWithQuestionsWithOptions } from "@/app/quiz/[id]/page";

const QuestionForm = ({ quiz }: { quiz: QuizWithQuestionsWithOptions }) => {
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState<number>();
  const totalQuestions = quiz.questions.length;
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleButtonClick = (answer: number, isCorrect: boolean) => {
    setCurrentAnswerSelected(answer);
    setIsCorrect(isCorrect);
  };

  const handleContinue = () => {
    if (!currentAnswerSelected) {
      const t = toast({
        title: "No answer selected",
        description: "Please pick an answer",
        variant: "destructive",
      });
      setTimeout(() => t.dismiss(), 1500);
      return;
    }

    // if (!isCorrect && currentQuestionIndex + 1 < totalQuestions) {
    if (!isCorrect && currentQuestionIndex + 1 < totalQuestions) {
      const t = toast({
        title: "Incorrect answer",
        variant: "destructive",
      });
      setTimeout(() => t.dismiss(), 1500);
      return setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    // if (isCorrect && currentQuestionIndex + 1 < totalQuestions) {
    if (isCorrect && currentQuestionIndex + 1 < totalQuestions) {
      const t = toast({
        title: "You got it right!",
        variant: "success",
      });
      setTimeout(() => t.dismiss(), 1500);
      setCorrectAnswers((prevCorrect) => prevCorrect + 1);
    }

    setIsCorrect(false);
    setCurrentAnswerSelected(undefined);
    return setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className='flex-1 flex flex-col gap-9 m-6 w-[80vw] md:w-[70vw] lg:w-[40vw] items-center self-center'>
        <div className='flex flex-col gap-3 items-center'>
          <p>Total correct answers</p>
          <p className='bg-secondary px-4 py-2 rounded-full'>
            {correctAnswers} out of {totalQuestions} Questions
          </p>
        </div>
        <div className='flex flex-col items-center border-2 p-12 rounded-xl justify-center gap-5'>
          <p className='font-bold text-3xl'>Your score is</p>
          <div className='rounded-full bg-primary text-primary-foreground p-10 text-[5rem]'>{Math.floor((correctAnswers / totalQuestions) * 100)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex-1 flex flex-col m-6 justify-between w-[80vw] md:w-[70vw] lg:w-[40vw] self-center'>
      <div className='space-y-5'>
        <Progress value={(currentQuestionIndex + 1 / totalQuestions) * 100} />
        <p className=''>
          Question: {currentQuestionIndex + 1}/{totalQuestions}
        </p>
      </div>
      <div className='h-auto max-h-[10rem]'>
        <p className='font-bold  text-xl'>{currentQuestion.title}</p>
      </div>
      <div className='grid grid-flow-row grid-rows-4 gap-2'>
        {currentQuestion.options.map((option) => {
          return (
            <Button
              onClick={() => handleButtonClick(option.id, option.isAnswer)}
              className={`text-xl h-auto active:bg-green-700 active:text-secondary-foreground focus:bg-green-700 focus:text-secondary-foreground
                ${currentAnswerSelected === option.id ? "bg-green-700 text-secondary-foreground" : ""}
              `}
              key={option.id}
            >
              {option.title}
            </Button>
          );
        })}
      </div>
      <Button variant={"secondary"} className='rounded-full min-h-[4rem] text-xl normal-case mt-5' onClick={() => handleContinue()}>
        Continue
      </Button>
    </div>
  );
};

export default QuestionForm;
