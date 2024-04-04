import { getItems } from "@alheimsins/b5-johnson-120-ipip-neo-pi-r"
import { Survey } from "./survey";
import { useTranslations } from "next-intl";
import { saveTest } from "@/actions";

export default function TestPage() {
  const questions = getItems()
  const t = useTranslations('test')
  return (
    <>
      <Survey
        questions={questions}
        nextText={t('next')}
        prevText={t('back')}
        resultsText={t('seeResults')}
        saveTest={saveTest}
      />
    </>
  );
}
