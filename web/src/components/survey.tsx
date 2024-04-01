"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { type Question } from "@alheimsins/b5-johnson-120-ipip-neo-pi-r"
import { sleep, formatTimer, isDev } from "@/lib/helpers";
import useWindowDimensions from '@/hooks/useWindowDimensions';
import useTimer from '@/hooks/useTimer';
import { Progress } from "@nextui-org/progress";
import confetti from "canvas-confetti";
import { Spinner } from "@nextui-org/spinner";

interface SurveyProps {
  questions: Question[];
  nextText: string;
  prevText: string;
  resultsText: string;
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
  prevText,
  resultsText
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(false);
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

  const isTestDone = questions.length === answers.length

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
    if (questionsPerPage === 1) {
      await sleep(700);
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      window.scrollTo(0, 0);
    }
  }

  function upsertAnswer(answer: Answer) {
    setAnswers([...answers.filter((a) => a.id !== answer.id), answer]);
  }

  function handlePreviousQuestions() {
    setCurrentQuestionIndex(currentQuestionIndex - questionsPerPage);
    window.scrollTo(0, 0);
  }

  function handleNextQuestions() {
    setCurrentQuestionIndex(currentQuestionIndex + questionsPerPage)
    window.scrollTo(0, 0);
  }

  function skipToEnd() {
    const randomAnswers = questions.map((question) => ({
      id: question.id,
      score: Math.floor(Math.random() * 5) + 1,
      domain: question.domain,
      facet: question.facet
    })).slice(0, questions.length - 1);

    setAnswers([...randomAnswers]);
    setCurrentQuestionIndex(questions.length - 1)
  }

  function submitTest() {
    setLoading(true);
    confetti({})
  }

  const progress = Math.round((answers.length / questions.length) * 100);
  const nextButtonDisabled = (currentQuestionIndex + questionsPerPage > answers.length)
    || (isTestDone && currentQuestionIndex === questions.length - questionsPerPage);
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
        color="secondary"
      />
      {currentQuestions.map((question) => (
        <div key={question.num}>
          <h2 className="text-2xl my-4">{question.text}</h2>
          <div>
            <RadioGroup
              onChange={handleAnswer}
              value={answers.find((answer) => answer.id === question.id)?.score.toString()}
              color="secondary"

            >
              {question.choices.map((choice, index) => (
                <Radio
                  id={question.id}
                  key={index}
                  value={choice.score.toString()}
                >
                  {choice.text}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
      <div className="my-12 space-x-4 inline-flex">
        <Button
          color="primary"
          isDisabled={backButtonDisabled || loading}
          onClick={handlePreviousQuestions}
        >
          {prevText.toUpperCase()}
        </Button>

        <Button
          color="primary"
          isDisabled={nextButtonDisabled || loading}
          onClick={handleNextQuestions}
        >
          {nextText.toUpperCase()}
        </Button>


        {isTestDone && (
          <Button
            color="secondary"
            onClick={submitTest}
            disabled={loading}
          >
            {
              loading ?
                <Spinner color="default" size="sm" />
                : resultsText.toUpperCase()
            }
          </Button>
        )}

        {isDev && !isTestDone && (
          <Button
            color="primary"
            onClick={skipToEnd}
          >
            Skip to end (dev)
          </Button>
        )}
      </div>
    </>
  );
};
