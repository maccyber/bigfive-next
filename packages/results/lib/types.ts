type Score = 'low' | 'neutral' | 'high';
type DomainShort = 'O' | 'C' | 'E' | 'A' | 'N';

export interface Result {
  score: Score;
  text: string;
}

export interface Facet {
  facet: number;
  title: string;
  text: string;
}

export interface Domain {
  domain: DomainShort;
  title: string;
  shortDescription: string;
  description: string;
  results: Result[];
  facets: Facet[];
}

export interface FacetInput {
  score: number;
  count: number;
  result: Score;
}

export interface DomainInput {
  score: number;
  count: number;
  result: Score;
  facet: Record<string, FacetInput>;
}

export type Scores = Record<string, DomainInput>;

export type Template = Record<string, Domain>;
