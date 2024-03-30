"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { type Question } from "@alheimsins/b5-johnson-120-ipip-neo-pi-r"
import { sleep, formatTimer } from "@/lib/helpers";
import useWindowDimensions from '@/hooks/useWindowDimensions';
import useTimer from '@/hooks/useTimer';
import { Progress } from "@nextui-org/progress";

interface SurveyProps {
  questions: Question[];
  nextText: string;
  prevText: string;
}

type BaseAnswer = {
  score: number;
  domain: string;
  facet: number;
}

type Answer = BaseAnswer & { id: string }

export const Survey: React.FC<SurveyProps> = ({
  questions,
  nextText,
  prevText
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { width } = useWindowDimensions();
  const seconds = useTimer();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setQuestionsPerPage(3);
      } else {
        setQuestionsPerPage(1);
      }
    }
    handleResize()
  }, [width]);

  const currentQuestions = questions.slice(currentQuestionIndex, currentQuestionIndex + questionsPerPage)

  async function handleAnswer(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    const question = questions.find((question) => question.id === id);

    if (!question) return;
    upsertAnswer({
      id,
      score: Number(value),
      domain: question.domain,
      facet: question.facet
    });

    // TODO: Avoids skipping question if user changes answer within 700 ms on
    await sleep(700);
    // setCurrentQuestionIndex(currentQuestionIndex + 1);
    window.scrollTo(0, 0);
  }

  function upsertAnswer(answer: Answer) {
    setAnswers([...answers.filter((a) => a.id !== answer.id), answer]);
  }

  function handlePreviousQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    window.scrollTo(0, 0);
  }

  const progress = Math.round((currentQuestionIndex / questions.length) * 100);
  const nextButtonDisabled = currentQuestionIndex + questionsPerPage >= questions.length;
  const backButtonDisabled = currentQuestionIndex === 0;

  return (
    <>
      <Progress
        aria-label="Progress bar"
        value={progress}
        className="max-w"
        showValueLabel={true}
        label={formatTimer(seconds)}
        minValue={0}
        maxValue={100}
        size="lg"
      />
      {currentQuestions.map((question) => (
        <div key={question.num}>
          <h2 className="text-2xl my-4">{question.text}</h2>
          <div>
            <RadioGroup
              onChange={handleAnswer}
              value={answers.find((answer) => answer.id === question.id)?.score.toString()}
            >
              {question.choices.map((choice, index) => (
                <Radio
                  id={question.id}
                  key={index}
                  value={choice.score.toString()}>
                  {choice.text}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
      <div className="my-12 space-x-4">
        <Button
          color="primary"
          isDisabled={backButtonDisabled}
          onClick={handlePreviousQuestion}
        >
          {prevText.toUpperCase()}
        </Button>

        <Button
          color="primary"
          isDisabled={nextButtonDisabled}
          // onClick={handleQuestionChecked}
        >
          {nextText.toUpperCase()}
        </Button>
      </div>
    </>
  );
};
