import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { ResultIcon, PersonIcon } from "@/components/icons";
import { PersonsTable } from "@/components/PersonsTable";

export default function ComparePage() {
  const t = useTranslations('getCompare');
  return (
    <div>
      <h1 className={title()}>{t('title')}</h1>
      <br />
      <br />
      <span>{t('description1')}</span>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            placeholder="Arthur Dent"
            startContent={<PersonIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
            isInvalid={false}
          // errorMessage="Please enter a valid ID"
          />
          <Input
            type="text"
            label="ID"
            labelPlacement="outside"
            placeholder="58a70606a835c400c8b38e84"
            startContent={<ResultIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
            isInvalid={false}
          // errorMessage="Please enter a valid ID"
          />
          <Button color="primary">{t('addPerson')}</Button>
        </div>
        <div>
        <PersonsTable />
        <Button color="primary" isDisabled>{t('comparePeople')}</Button>
        </div>
      </div>
    </div>
  );
}
