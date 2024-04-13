import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { ComparePeople } from "./compare-people";
import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

interface Props {
  params: { locale: string };
}

export default function ComparePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getCompare');
  return (
    <div>
      <h1 className={title()}>{t('title')}</h1>
      <br />
      <br />
      <span className="mt-2">{t('description1')}</span>
      <Suspense fallback="loading...">
        <ComparePeople
          addPersonText={t('addPerson')}
          comparePeopleText={t('comparePeople')}
        />
      </Suspense>
    </div>
  );
}
