'use client'

import { subtitle, heading } from "@/components/primitives";
import Link from "next/link";
import { Chart } from "./chart";
import { Facet, Domain } from "@bigfive-org/results";

interface DomainProps {
  domain: Domain;
}

export const DomainPage: React.FC<DomainProps> = ({ domain }) => {
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
            domain.facets.map((facet: Facet, index: number) => (
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
