import { Link as NextUILink } from "@nextui-org/link";
import { Link } from "../navigation"

import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon,
  Logo
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (

    <footer className="container mx-auto max-w-7xl pb-12 px-12">
      <Logo />

      <NextUILink isExternal href={siteConfig.links.twitter} aria-label="Twitter">
        <TwitterIcon size={48} className="text-default-500" />
      </NextUILink>
      <NextUILink isExternal href={siteConfig.links.github} aria-label="Github">
        <GithubIcon size={48} className="text-default-500" />
      </NextUILink>
      <NextUILink isExternal href={siteConfig.links.linkedIn} aria-label="LinkedIn">
        <LinkedInIcon size={48} className="text-default-500" />
      </NextUILink>
      <NextUILink isExternal href={siteConfig.links.facebook} aria-label="Facebook">
        <FacebookIcon size={48} className="text-default-500" />
      </NextUILink>

      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
        © {year} — B5 Holding AS - all rights reserved.
      </p>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {siteConfig.footerLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:underline me-4 md:me-6">{item.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
