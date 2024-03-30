import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy')
  return (
    <div>
      <h1 className={title()}>{t('title')}</h1>
      <div dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
    </div>
  );
}
