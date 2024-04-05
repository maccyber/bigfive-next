interface Answer {
  domain: string;
  facet?: number;
  score: number;
}

interface Result {
  score: number;
  count: number;
  result: string;
  facet: { [key: string]: { score: number; count: number; result: string } };
}

export function processAnswers(answers: Answer[]): { [key: string]: Result } {
  const result: { [key: string]: Result } = {};

  answers.forEach(answer => {
    if (!result[answer.domain]) {
      result[answer.domain] = { score: 0, count: 0, result: 'neutral', facet: {} };
    }
    const domain = result[answer.domain];
    domain.score += answer.score;
    domain.count++;

    if (!answer.facet) return

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

export function calculateResult(score: number, count: number): string {
  const avgScore = score / count;
  if (avgScore > 3) {
    return 'high';
  } else if (avgScore < 3) {
    return 'low';
  }
  return 'neutral';
}
