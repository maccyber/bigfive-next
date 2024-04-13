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

export interface Domain {
  domain: string;
  facets: Facet[];
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

export function getTemplate(lang: string): any;
export function generateResult(answers: Answers, template: Domain[]): Domain[];
export function getDomain(options: Options): Domain;
export function getFacet(options: Options): Facet;
export function getInfo(): Language[];
export default function getResults(options: ResultsOptions): any;
