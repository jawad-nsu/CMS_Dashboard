'use client';

import { useState } from 'react';

// hooks & const
import { useForm } from 'react-hook-form';
import { useStoreModal } from '@/hooks/use-store-modals';
import { storeFormSchema } from '@/constant/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';

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

// API
import { postStore } from '@/backend/store';

export const StoreModal = () => {
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    name: '',
  };

  const form = useForm<z.infer<typeof storeFormSchema>>({
    resolver: zodResolver(storeFormSchema),
    defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof storeFormSchema>) => {
    try {
      setLoading(true);

      const res = await postStore(values);

      console.log(res.data);
      toast.success('Store Created!');
      return res.data;
    } catch (err) {
      setLoading(false);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
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
                      <Input
                        disabled={loading}
                        placeholder='E-commerce'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='pt-6 space-x-2 flex items-center justify-end'>
                <Button
                  disabled={loading}
                  variant='outline'
                  onClick={storeModal.onClose}
                >
                  Cancel
                </Button>
                <Button disabled={loading} n type='submit'>
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
