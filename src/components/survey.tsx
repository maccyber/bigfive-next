"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { type Question } from "@alheimsins/b5-johnson-120-ipip-neo-pi-r"
import useWindowDimensions from '@/hooks/useWindowDimensions';

interface SurveyProps {
  questions: Question[];
}

export const Survey: React.FC<SurveyProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const { width } = useWindowDimensions();


  useEffect(() => {
    if (width < 768) {
      setQuestionsPerPage(1);
    } else {
      setQuestionsPerPage(3);
    }
    console.log('Width changed:', width);
  }, [width]);

  function handleNextQuestion() {
    window.scrollTo(0, 0);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function handlePreviousQuestion() {
    window.scrollTo(0, 0);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  return (
    <div>
      {questions.slice(currentQuestionIndex, currentQuestionIndex + questionsPerPage).map((question) => (
        <div key={question.num}>
          <h2>{question.text}</h2>
          <div>
            <RadioGroup
              label="Select your favorite city"
              onChange={() => handleNextQuestion()}
            >
              {question.choices.map((choice, index) => (
                <Radio key={index} value={choice.score.toString()}>{choice.text}</Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
    </div>
  );
};
