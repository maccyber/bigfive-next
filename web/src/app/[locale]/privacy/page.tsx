import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function PrivacyPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('privacy')
  return (
    <div>
      <h1 className={title()}>{t('title')}</h1>
      <div dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
    </div>
  );
}
