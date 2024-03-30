interface Answer {
  domain: string;
  facet: string;
  score: number;
}

interface Result {
  score: number;
  count: number;
  result: string;
  facet: { [key: string]: { score: number; count: number; result: string } };
}

function processAnswers(answers: Answer[]): { [key: string]: Result } {
  const result: { [key: string]: Result } = {};

  answers.forEach(answer => {
    if (!result[answer.domain]) {
      result[answer.domain] = { score: 0, count: 0, result: 'neutral', facet: {} };
    }
    const domain = result[answer.domain];
    domain.score += answer.score;
    domain.count++;

    if (!domain.facet[answer.facet]) {
      domain.facet[answer.facet] = { score: 0, count: 0, result: 'neutral' };
    }
    const facet = domain.facet[answer.facet];
    facet.score += answer.score;
    facet.count++;
  });

  Object.values(result).forEach(domain => {
    domain.result = calculateResult(domain.score, domain.count);
    Object.values(domain.facet).forEach(facet => {
      facet.result = calculateResult(facet.score, facet.count);
    });
  });

  return result;
}

function calculateResult(score: number, count: number): string {
  const avgScore = score / count;
  if (avgScore < 3) {
    return 'high';
  } else if (avgScore > 3) {
    return 'low';
  }
  return 'neutral';
}

// Test
const answers: Answer[] = [
  { domain: "A", facet: "1", score: 3 },
  { domain: "A", facet: "1", score: 3 },
  { domain: "E", facet: "1", score: 3 },
  { domain: "E", facet: "2", score: 3 }
];

const output = processAnswers(answers);
console.log(output);
