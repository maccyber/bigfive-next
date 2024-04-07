export type SiteConfig = typeof siteConfig;

const basePath = "https://bigfive-test.com"

export type Language = {
  code: string;
  name: string;
  countryCode?: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', countryCode: 'us' },
  { code: 'ar', name: 'Arabic' },
  { code: 'de', name: 'German', countryCode: 'de' },
  { code: 'es', name: 'Spanish', countryCode: 'es' },
  { code: 'fr', name: 'French', countryCode: 'fr' },
  { code: 'id', name: 'Indonesian', countryCode: 'id' },
  { code: 'it', name: 'Italian', countryCode: 'it' },
  { code: 'no', name: 'Norwegian', countryCode: 'no' },
  { code: 'pt', name: 'Portuguese', countryCode: 'pt' },
  { code: 'sv', name: 'Swedish', countryCode: 'se' },
  { code: 'uk', name: 'Ukrainian', countryCode: 'ua' },
  { code: 'da', name: 'Danish', countryCode: 'dk' },
  { code: 'fi', name: 'Finnish', countryCode: 'fi' },
  { code: 'hi', name: 'Hindi', countryCode: 'in' },
  { code: 'is', name: 'Icelandic', countryCode: 'is' },
  { code: 'ja', name: 'Japanese', countryCode: 'jp' },
  { code: 'pl', name: 'Polish', countryCode: 'pl' },
  { code: 'ru', name: 'Russian',countryCode: 'ru' },
  { code: 'th', name: 'Thai', countryCode: 'th' },
  { code: 'zh', name: 'Chinese', countryCode: 'cn' }
]

export const locales = languages.map((lang) => lang.code) as string[];

export const siteConfig = {
	name: "Big Five Personality Test",
	description: "Learn to know yourself better with a free, open-source personality test.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Result",
      href: "/result",
    },
    {
      label: "Compare",
      href: "/compare",
    },
    {
      label: "Articles",
      href: "/articles",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
    {
      label: "See your result",
      href: "/result",
    },
    {
      label: "Compare with others",
      href: "/compare",
    },
    {
      label: "Articles",
      href: "/articles",
    },
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "FAQ",
      href: "/faq",
    }
	],
  footerLinks: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Articles",
      href: "/articles",
    },
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "FAQ",
      href: "/faq",
    }
  ],
	links: {
		github: "https://github.com/rubynor/bigfive-web",
		twitter: "https://twitter.com/rubynor",
    linkedIn: "https://www.linkedin.com/company/rubynor-as/",
    facebook: "https://www.facebook.com/rubynorno",
	},
};
