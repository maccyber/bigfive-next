import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { ResultIcon } from "@/components/icons";

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
        <Input 
          type="text"
          label="ID"
          labelPlacement="outside"
          placeholder="58a70606a835c400c8b38e84"
          startContent={<ResultIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          isInvalid={false}
          // errorMessage="Please enter a valid ID"
        />
        <Button color="primary">{t('getResult')}</Button>
      </div>
    </div>
  );
}
