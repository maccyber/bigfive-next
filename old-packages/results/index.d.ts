export interface Answers {
  [key: string]: {
    facet: {
      [key: string]: {
        result: string;
        score: number;
        count: number;
      };
    };
  };
}

type Score = 'low' | 'neutral' | 'high';

interface TemplateDomain {
    domain: string;
    title: string;
    shortDescription: string;
    description: string;
    results: TemplateResult[];
    facets: TemplateFacet[];
}

interface TemplateResult {
    score: Score;
    text: string;
}

interface TemplateFacet {
    facet: number;
    title: string;
    text: string;
}

export interface Facet {
  facet: string;
  scoreText: string;
  score: number;
  count: number;
}

export interface Options {
  language?: string;
  domain?: string;
  facet?: string;
}

export interface Language {
  id: string;
  text: string;
}

export interface ResultsOptions {
  lang: string;
  scores: any;
}

export interface TestReport {
    domain: string;
    title: string;
    shortDescription: string;
    description: string;
    scoreText: string;
    count: number;
    score: number;
    facets: Facet[];
    text: string;
}

export interface FacetReport {
    facet: number;
    title: string;
    text: string;
    score: number;
    count: number;
    scoreText: Score;
}

export function getTemplate(lang: string): any;
export function generateResult(answers: Answers, template: TemplateDomain[]): TestReport[];
export function getDomain(options: Options): TemplateDomain;
export function getFacet(options: Options): Facet;
export function getInfo(): Language[];
export default function getResults(options: ResultsOptions): TestReport[];
