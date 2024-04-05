import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { ViewPreviousButton } from './view-previous-button';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function ResultPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getResult');

  return (
    <div>
      <h1 className={title()}>{t('result')}</h1>
      <div className="mt-10">
        {t('explanation')}
      </div>
        <ViewPreviousButton viewPreviousText={t('viewPrevious')} getResultsText={t('getResult')} />
    </div>
  );
}
