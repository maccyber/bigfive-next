'use client'

import { title, subtitle, heading } from "@/components/primitives";
import Link from "next/link";
import { Chart } from "./chart";

interface DomainProps {
  domain: any;
}

export const Domain: React.FC<DomainProps> = ({ domain }) => {
  return (
    <>
      <div className="mt-5">
        <Link href={`#${domain.title}`}>
          <h2
            className={heading()}
            id={domain.title}
          >
            {domain.title}
          </h2>
        </Link>
        <Chart max={20} results={domain.facets} />
        <div>
          {
            domain.facets.map((facet: any, index: number) => (
              <div key={index} className="mt-5">
                <Link href={`#${facet.title}`}>
                  <h3
                    className={subtitle()}
                    id={facet.title}
                  >
                    {facet.title}
                  </h3>
                </Link>
                <div>
                  Score: {facet.score} - {facet.scoreText}
                </div>
                <p>{facet.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
