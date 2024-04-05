import { LanguageCode } from "./lib/data/languages";
import languages from "./lib/data/languages";
import getTemplate from "./lib/get-template";
import generateResult from "./lib/generate-result";
import getDomain from "./lib/get-domain";
import getFacet from "./lib/get-facet";
import { Domain, Scores } from "./lib/types";

interface ResultOptions {
  language: LanguageCode;
  scores: Scores;
}

export default function (options: ResultOptions) {
  const template: Domain = getTemplate(options.language)
  return generateResult(options.scores, template)
}

export function getInfo() {
  return { languages }
}

export { getTemplate, getDomain, getFacet };
