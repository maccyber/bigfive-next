import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FeaturesGrid } from "@/components/features-grid";
import { ExperimentIcon, LanguageIcon, LogosOpensource, MoneyIcon } from '@/components/icons';
import { ArrowRightIcon } from '@/components/icons';

export default function Home() {
  const t = useTranslations('frontpage');
  const features = [
    { title: t('cards.open.title'), description: t('cards.open.text'), icon: LogosOpensource({}) },
    { title: t('cards.free.title'), description: t('cards.free.text'), icon: MoneyIcon({}) },
    { title: t('cards.scientific.title'), description: t('cards.scientific.text'), icon: ExperimentIcon({}) },
    { title: t('cards.translated.title'), description: t.raw('cards.translated.text'), icon: LanguageIcon({}), href: 'https://b5.translations.alheimsins.net/' },
  ]

  const titleDescription = t.rich(
    'description.top',
    {
      violet: (chunks) => <span className={title({ color: 'violet'})}>{chunks}</span>,
    }
  )

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>{titleDescription}</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          {t('description.info')}
        </h2>
      </div>

      <Link
        href="/test"
        className={buttonStyles({ color: "primary", radius: "full", variant: "shadow", size: "lg", fullWidth: true })}
      >
        {t('call_to_action')} <ArrowRightIcon />
      </Link>
      <div className="font-normal text-default-500 block max-w-full text-center">
        {t('no_registration')}
      </div>

      <FeaturesGrid features={features} />
      <h1 className={title()}>
        {t('tests_taken')}
      </h1>


      <Image
        src="/compare_yourself.svg"
        width={500}
        height={500}
        alt="Hero image"
      />
    </section>
  );
}
