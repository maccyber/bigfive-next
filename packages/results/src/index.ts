import { LanguageCode } from "./data/languages";
import languages from "./data/languages";
import { Domain, Scores, Template } from "./types";

interface ResultOptions {
  language: LanguageCode;
  scores: Scores;
}

export default function(options: ResultOptions) {
  const template: Domain = getTemplate(options.language)
  return generateResult(options.scores, template)
}

export function getInfo() {
  return { languages }
}

interface FacetOptions {
  language: LanguageCode
  domain: string
  facet: string
}

export function getFacet(options: FacetOptions) {
  const domain = getDomain(options)
  if (!domain) {
    throw new Error('Domain not found')
  }
  const facetId = options.facet.toString()
  const filtered = domain.facets.find(item => item.facet.toString() === facetId)
  return filtered
}

interface DomainOptions {
  language: LanguageCode
  domain: string
}

export function getDomain(options: DomainOptions) {
  const template = getTemplate(options.language)
  if (!template) {
    throw new Error('Template not found')
  }
  const domainId = options.domain.toLowerCase()
  const filtered = template.find(item => item.domain.toLowerCase() === domainId)
  return filtered
}

export function getTemplate(language: string) {
  try {
    const template = require(`./data/${language}`)
    return template
  } catch (error) {
    const template = require('./data/en')
    return template
  }
}

export function generateResult(scores: Scores, template: Template) {
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
