import { getData } from '@/actions'
import { Snippet } from '@nextui-org/snippet'
import { Chart } from './chart'
import { useTranslations } from 'next-intl'
import { title } from "@/components/primitives";

export default async function ResultPage({ params }: { params: { id: string } }) {
  const resultData = await getData(params.id)

  return <Results resultData={resultData} />
}

interface ResultsProps {
  resultData: any;
}

const Results: React.FC<ResultsProps> = ({ resultData }) => {
  const t = useTranslations('results')
  return (
    <>
      <div className="flex">
        <Snippet
          hideSymbol
          color="danger"
          className="w-full justify-center"
        >{resultData?._id.toString()}
        </Snippet>
      </div>
      <div className="flex mt-10">
        <h1 className={title()}>
          {t('theBigFive')}
        </h1>
      </div>
      <Chart max={120} />
    </>
  )
}
