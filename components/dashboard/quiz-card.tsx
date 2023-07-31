import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { url } from "inspector";
import Link from "next/link";

const QuizCard = ({ quiz, classroom, link }: { quiz: string; classroom: string; link: string }) => {
  return (
    <Card className='w-[50vw] md:w-[20vw] min-h-[15vh] md:min-h-[25vh] hover:bg-secondary active:bg-secondary items-center flex'>
      <Link href={link}>
        <CardHeader>
          <CardTitle className='hyphens-auto'>{quiz}</CardTitle>
          <CardDescription>{classroom}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default QuizCard;
