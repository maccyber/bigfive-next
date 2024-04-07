import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { ComparePeople } from "@/components/persons-table";
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function ComparePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getCompare');
  // need use client
  // const params = useSearchParams()
  // const paramId = params.get('id')
  return (
    <div>
      <h1 className={title()}>{t('title')}</h1>
      <br />
      <br />
      <span>{t('description1')}</span>
      <ComparePeople
        addPersonText={t('addPerson')}
        comparePeopleText={t('comparePeople')}
      />
    </div>
  );
}
