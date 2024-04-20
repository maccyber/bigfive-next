'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from '@nextui-org/navbar';
import LocaleSwitcher from '@/components/locale-switcher';
import LocaleSwitcherFull from '@/components/locale-switcher-full';
import { Link } from '@nextui-org/link';

import { link as linkStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import clsx from 'clsx';

import { ThemeSwitch } from '@/components/theme-switch';
import { TwitterIcon, GithubIcon, Logo } from '@/components/icons';
import { Link as NextLink } from '../navigation';
import { useState } from 'react';

interface NavbarProps {
  navItems: { label: string; href: string }[];
  navMenuItems: { label: string; href: string }[];
}

export const Navbar = ({ navItems, navMenuItems }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NextUINavbar
      maxWidth='xl'
      position='sticky'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink
            className='flex justify-start items-center gap-1'
            href='/'
            aria-label='Home'
          >
            <Logo />
          </NextLink>
        </NavbarBrand>
        <div className='hidden md:flex gap-4 justify-start ml-2'>
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className='hidden md:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-2'>
          <Link isExternal href={siteConfig.links.twitter} aria-label='Twitter'>
            <TwitterIcon className='text-default-500' />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label='Github'>
            <GithubIcon className='text-default-500' />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcherFull />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='md:hidden basis-1 pl-4' justify='end'>
        <LocaleSwitcher />
        <Link isExternal href={siteConfig.links.github} aria-label='Github'>
          <GithubIcon className='text-default-500' />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                onClick={() => setIsMenuOpen(false)}
                href={item.href}
                size='lg'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
