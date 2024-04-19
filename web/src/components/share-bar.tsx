'use client';

import { Button, Tooltip } from '@nextui-org/react';
import { CopyIcon, FacebookIcon, PDFIcon, TwitterIcon } from './icons';
import { Link as NextUiLink } from '@nextui-org/link';
import { Report } from '@/actions/index';

interface ShareBarProps {
  report: Report;
}

export default function ShareBar({ report }: ShareBarProps) {
  return (
    <div className='flex mt-5 justify-end w-full gap-x-1'>
      <Tooltip color='secondary' content='Share on facebook'>
        <Button
          isIconOnly
          aria-label='Share on facebook'
          radius='full'
          size='lg'
          variant='light'
          as={NextUiLink}
          isExternal
          href={`https://www.facebook.com/sharer/sharer.php?u=https://bigfive-test.com/result/${report.id}`}
        >
          <FacebookIcon size={48} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Share on X'>
        <Button
          isIconOnly
          aria-label='Share on X'
          radius='full'
          size='lg'
          variant='light'
          target='_blank'
          as={NextUiLink}
          href={`https://twitter.com/intent/tweet?text=See my personality traits!&url=https://bigfive-test.com/result/${report.id}`}
        >
          <TwitterIcon size={42} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Download PDF'>
        <Button
          isIconOnly
          aria-label='Download pdf'
          radius='full'
          size='lg'
          variant='light'
        >
          <PDFIcon size={32} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content='Copy link'>
        <Button
          isIconOnly
          aria-label='Copy link'
          radius='full'
          size='lg'
          variant='light'
        >
          <CopyIcon size={42} />
        </Button>
      </Tooltip>
    </div>
  );
}
