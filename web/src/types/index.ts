import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type BaseAnswer = {
  score: number;
  domain: string;
  facet: number;
}

export type Answer = BaseAnswer & { id: string }

export type DbResult = {
  testId: string,
  lang: string,
  invalid: boolean,
  timeElapsed: number,
  dateStamp: string,
  answers: Answer[]
}
