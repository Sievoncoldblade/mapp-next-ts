import React from "react";
import { Image } from "next/dist/client/image-component";

interface OnboardingCardProps {
  image: any;
  title: string;
  description: string;
  alt: string;
  key: string;
}

function OnboardingCard({ image, title, description, alt, key }: OnboardingCardProps) {
  return (
    <div className='carousel-item max-w-sm p-5 flex flex-col text-center px-3' key={key} id={`item${key}`}>
      <Image src={image} alt={alt} className='w-5/6' />
      <div className='mt-5'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default OnboardingCard;
