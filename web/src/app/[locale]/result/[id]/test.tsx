"use server"

interface TestProps {
  questions: Question[];
  nextText: string;
  prevText: string;
  resultsText: string;
}

const Test: React.FC<TestProps> = ({ nextText, prevText, resultsText, questions }) => {
  return (
    <>
      <Survey
        questions={questions}
        nextText={nextText}
        prevText={prevText}
        resultsText={resultsText}
        saveTest={saveTest}
      />
    </>
  )
}
