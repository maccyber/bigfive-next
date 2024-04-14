'use client'

import { subtitle, heading } from "@/components/primitives";
import Link from "next/link";
import { Facet, Domain } from "@bigfive-org/results";
import { BarChart } from "@/components/bar-chart";

interface DomainProps {
  domain: Domain;
  scoreText: string;
}

export const DomainPage: React.FC<DomainProps> = ({ domain, scoreText }) => {
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
        <BarChart max={20} results={domain.facets} />
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
                <div className="font-semibold text-gray-500">
                  {scoreText}: {facet.score} ({facet.scoreText})
                </div>
                <p className="mt-3">{facet.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
