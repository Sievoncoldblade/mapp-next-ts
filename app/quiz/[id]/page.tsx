import QuestionForm from "@/components/Quiz/QuestionForm";
import React from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
const Quiz = () => {
  return (
    <div className='flex flex-col h-[90vh]'>
      <nav className='flex-none navbar bg-base-200 p-4'>
        <div className='navbar-start'>
          <button className='btn'>
            <FaArrowLeft />
          </button>
        </div>
        <div className='navbar-center text-xl'>Title of Quiz</div>
        <div className='navbar-end'>
          <button className='btn'>
            <FaTimes />
          </button>
        </div>
      </nav>

      <QuestionForm />
    </div>
  );
};

export default Quiz;
