'use client';

import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modals';

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title='Create store'
      description='create new store for store manager'
      isOpen={storeModal.isOpen}
      onClose={() => {}}
    >
      Future create form store
    </Modal>
  );
};
