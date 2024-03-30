import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { Button } from "@nextui-org/button";
import ResultId from "@/components/result-id";

export default function ResultPage() {
  const t = useTranslations('getResult');

  return (
    <div>
      <h1 className={title()}>{t('result')}</h1>
      <br />
      <br />
      <span>
        {t('explanation')}
      </span>
      <div className="w-full flex flex-col gap-4">
        <ResultId />
        <Button color="primary">{t('getResult')}</Button>
      </div>
    </div>
  );
}
