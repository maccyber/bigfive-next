import { Report, getTestResult } from '@/actions';
import { Snippet } from '@nextui-org/snippet';
import { useTranslations } from 'next-intl';
import { title } from '@/components/primitives';
import { DomainPage } from './domain';
import { Domain } from '@bigfive-org/results';
import { getTranslations } from 'next-intl/server';
import { BarChart } from '@/components/bar-chart';
import { Link } from '@/navigation';
import { ReportLanguageSwitch } from './report-language-switch';
import { Alert } from '@/components/alert';
import { supportEmail } from '@/config/site';
import { Button, Tooltip } from '@nextui-org/react';
import {
  CopyIcon,
  FacebookIcon,
  PDFIcon,
  TwitterIcon
} from '@/components/icons';
import { Link as NextUiLink } from '@nextui-org/link';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'results' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}

export default async function ResultPage({
  params,
  searchParams
}: {
  params: { id: string };
  searchParams: { lang: string };
}) {
  let report;

  try {
    report = await getTestResult(params.id.substring(0, 24), searchParams.lang);
  } catch (error) {
    throw new Error('Could not retrieve report');
  }

  if (!report)
    return (
      <Alert title='Could not retrive report'>
        <>
          <p>We could not retrive the following id {params.id}.</p>
          <p>Please check that it is correct or contact us at {supportEmail}</p>
        </>
      </Alert>
    );

  return <Results report={report} />;
}

interface ResultsProps {
  report: Report;
}

const Results = ({ report }: ResultsProps) => {
  const t = useTranslations('results');
  return (
    <>
      <div className='flex'>
        <div className='flex-grow'>
          <ReportLanguageSwitch
            language={report.language}
            availableLanguages={report.availableLanguages}
          />
        </div>
        <div className='text-gray-500 dark:text-gray-400'>
          {new Date(report.timestamp).toLocaleString()}
        </div>
      </div>
      <div className='text-center mt-4'>
        <span className='font-bold'>{t('important')}</span> &nbsp;
        {t('saveResults')} &nbsp;
        <Link href={`/compare/?id=${report.id}`} className='underline'>
          {t('compare')}
        </Link>{' '}
        &nbsp;
        {t('toOthers')}
      </div>
      <div className='flex mt-4'>
        <Snippet
          hideSymbol
          color='danger'
          className='w-full justify-center'
          size='lg'
        >
          {report.id}
        </Snippet>
      </div>
      <div className='flex mt-5 justify-end w-full gap-x-1'>
        <Tooltip color='secondary' content='Share on facebook'>
          <Button
            isIconOnly
            aria-label='Share on facebook'
            radius='full'
            size='lg'
            variant='light'
            as={NextUiLink}
            isExternal
            href={`https://www.facebook.com/sharer/sharer.php?u=https://bigfive-test.com/result/${report.id}`}
          >
            <FacebookIcon size={48} />
          </Button>
        </Tooltip>
        <Tooltip color='secondary' content='Share on X'>
          <Button
            isIconOnly
            aria-label='Share on X'
            radius='full'
            size='lg'
            variant='light'
            target='_blank'
            as={NextUiLink}
            href={`https://twitter.com/intent/tweet?text=See my personality traits!&url=https://bigfive-test.com/result/${report.id}`}
          >
            <TwitterIcon size={42} />
          </Button>
        </Tooltip>
        <Tooltip color='secondary' content='Download PDF'>
          <Button
            isIconOnly
            aria-label='Download pdf'
            radius='full'
            size='lg'
            variant='light'
          >
            <PDFIcon size={32} />
          </Button>
        </Tooltip>
        <Tooltip color='secondary' content='Copy link'>
          <Button
            isIconOnly
            aria-label='Copy link'
            radius='full'
            size='lg'
            variant='light'
          >
            <CopyIcon size={42} />
          </Button>
        </Tooltip>
      </div>
      <div className='flex mt-10'>
        <h1 className={title()}>{t('theBigFive')}</h1>
      </div>
      <BarChart max={120} results={report.results} />
      {report.results.map((result: Domain, index: number) => (
        <DomainPage key={index} domain={result} scoreText={t('score')} />
      ))}
    </>
  );
};
