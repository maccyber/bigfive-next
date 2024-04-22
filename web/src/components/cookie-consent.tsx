'use client';

import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal';
import { Link } from '@nextui-org/link';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem('cookie_consent');
    if (!storedCookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAllowCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  return (
    <Modal
      isOpen={showBanner}
      placement='bottom'
      onOpenChange={setShowBanner}
      // isDismissable={false}
      // isKeyboardDismissDisabled
      hideCloseButton
      // backdrop='transparent'
    >
      <ModalContent>
        <>
          <ModalHeader className='flex flex-col gap-1'>
            Cookie consent
          </ModalHeader>
          <ModalBody>
            <p>We use cookies on our site.</p>
            <p>
              Read more in our <Link href='/privacy'>privacy policy</Link>.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color='danger'
              variant='light'
              onPress={handleDeclineCookies}
            >
              Decline
            </Button>
            <Button color='primary' onPress={handleAllowCookies}>
              Allow cookies
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
