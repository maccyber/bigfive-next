import { title } from "@/components/primitives";
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
	return (
		<div>
			<h1 className={title()}>About</h1>
		</div>
	);
}
