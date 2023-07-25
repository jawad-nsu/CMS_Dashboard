'use client';

import { useEffect } from 'react';

import { useStoreModal } from '@/hooks/use-store-modals';

import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';

export default function SetupPage() {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className='m-2'>Root Page</div>;
}
