"use client";

import React, { useMemo, useRef, useState } from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Option, Prisma, Question, Quiz } from "@prisma/client";
import { QuestionsWithOptions, QuizWithQuestionsWithOptions } from "@/app/quiz/[id]/page";

const QuestionForm = ({ quiz }: { quiz: QuizWithQuestionsWithOptions }) => {
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState<number>();
  const [isCorrect, setIsCorrect] = useState(false);

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

      return;
    }

    if (!isCorrect) {
      const t = toast({
        title: "Incorrect answer",
        variant: "destructive",
      });
    } else {
      const t = toast({
        title: "You got it right!",
        variant: "default",
      });
      setIsCorrect(false);
      setCurrentAnswerSelected(undefined);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleShowQuestionResult = () => {};
  const currentQuestion = quiz.questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <p>No more Questions</p>;
  }

  console.log((currentQuestionIndex + 1 / quiz.questions.length) * 100);
  return (
    <div className='flex-1 flex gap-4 flex-col m-6 justify-between w-[80vw] md:w-[70vw] lg:w-[40vw] self-center'>
      <Progress value={(currentQuestionIndex + 1 / quiz.questions.length) * 100} />
      <p className=''>
        Question: {currentQuestionIndex + 1}/{quiz.questions.length}
      </p>
      <p className='font-bold h-auto min-h-[10rem] text-xl'>{currentQuestion.title}</p>
      <div className='grid grid-flow-row grid-rows-4 gap-2'>
        {currentQuestion.options.map((option) => {
          console.log(option.title);
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
      <Button variant={"secondary"} className='rounded-full min-h-[4rem] text-xl normal-case mt-5' onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
};

export default QuestionForm;
