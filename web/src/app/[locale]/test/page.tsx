import { getItems } from "@alheimsins/b5-johnson-120-ipip-neo-pi-r"
import { Survey } from "@/components/survey";
import { useTranslations } from "next-intl";

export default function TestPage() {
  const questions = getItems()
  const t = useTranslations('test')
  return (
    <>
      <Survey
        questions={questions}
        nextText={t('next')}
        prevText={t('back')}
      />
    </>
  );
}
