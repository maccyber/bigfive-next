import { TestResult, getTestResult } from '@/actions'
import { Snippet } from '@nextui-org/snippet'
import { Chart } from './chart'
import { useTranslations } from 'next-intl'
import { title } from "@/components/primitives";
import { Domain } from './domain';
import { TestReport } from '@bigfive-org/results';

export default async function ResultPage({ params }: { params: { id: string } }) {
  const testResults = await getTestResult(params.id)
  if (!testResults) return <div>404</div>
  console.log(testResults.results[0])

  return <Results testResults={testResults} />
}

interface ResultsProps {
  testResults: TestResult
}

const Results: React.FC<ResultsProps> = ({ testResults }) => {
  const t = useTranslations('results')
  return (
    <>
      <div className="flex">
        <Snippet
          hideSymbol
          color="danger"
          className="w-full justify-center"
        >{testResults.id}
        </Snippet>
      </div>
      <div>{new Date(testResults.timestamp).toLocaleString()}</div>
      <div className="flex mt-10">
        <h1 className={title()}>
          {t('theBigFive')}
        </h1>
      </div>
      <Chart max={120} results={testResults.results} />
      {
        testResults.results.map((result: TestReport, index: number) => (
            <Domain domain={result} key={index} />
        ))
      }
    </>
  )
}
