import { Template, Scores } from "./types";

export default function generateResult(scores: Scores, template: Template) {
  return Object.keys(scores).map(key => {
    const { result, count, score } = scores[key];
    const domain = template[key];
    const resultText = domain.results.find(res => res.score === result)?.text;
    const mappedFacets = domain.facets.map(({ facet, title, text }) => {
      const { score, count, result } = facet[key] || {};
      return { facet, title, text, score, count, scoreText: result };
    }).filter(({ score }) => score);

    return {
      domain: domain.domain,
      title: domain.title,
      shortDescription: domain.shortDescription,
      description: domain.description,
      scoreText: resultText,
      count,
      score,
      facets: mappedFacets,
      text: resultText
    };
  });
}
