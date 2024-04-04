import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { ViewPreviousButton } from './view-previous-button';

export default function ResultPage() {
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
