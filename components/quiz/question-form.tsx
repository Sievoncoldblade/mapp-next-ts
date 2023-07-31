"use client";

import React, { useRef } from "react";

const QuestionForm = () => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const handleSubmit = () => {
    ref.current?.show(); // show modal

    // setTimeout(() => {
    //   ref.current?.close();
    // }, 1000);
  };
  return (
    <div className='flex-1 flex gap-4 flex-col m-6 justify-between'>
      <p className=''>Question: 1/40</p>
      <p className='font-bold h-auto min-h-[10rem] text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nesciunt officiis voluptates ad, ratione inventore sapiente in voluptate dolor quidem?
      </p>
      <div className='grid grid-flow-row gap-2 '>
        <button className='btn focus:bg-success focus:text-base-100 min-h-[5rem] normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, debitis</button>
        <button className='btn focus:bg-success focus:text-base-100 min-h-[5rem] normal-case'>Answer 3</button>
        <button className='btn focus:bg-success focus:text-base-100 min-h-[5rem] normal-case'>Answer 4</button>
        <button className='btn focus:bg-success focus:text-base-100 min-h-[5rem] normal-case'>Answer 2</button>
      </div>

      <button className='btn btn-primary rounded-full min-h-[4rem] text-xl normal-case' onClick={handleSubmit}>
        Continue
      </button>
      <dialog ref={ref} id='my_modal_2' className='modal backdrop-brightness-75'>
        <form method='dialog' className='modal-box'>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>Press ESC key or click outside to close</p>
        </form>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default QuestionForm;
