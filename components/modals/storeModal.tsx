'use client';

// components
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '../ui/button';

// hooks & const
import { useForm } from 'react-hook-form';
import { useStoreModal } from '@/hooks/use-store-modals';
import { storeFormSchema } from '@/constant/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export const StoreModal = () => {
  const defaultValues = {
    name: '',
  };

  const form = useForm<z.infer<typeof storeFormSchema>>({
    resolver: zodResolver(storeFormSchema),
    defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof storeFormSchema>) => {
    console.log(values);
    //TODO: Create store
  };

  const storeModal = useStoreModal();

  return (
    <Modal
      title='Create store'
      description='create new store for store manager'
      isOpen={storeModal.isOpen}
      onClose={() => {}}
    >
      <div>
        <div className='space-y-4 py-2 pb-4'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='E-commerce' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='pt-6 space-x-2 flex items-center justify-end'>
                <Button variant='outline' onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button type='submit'>Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
