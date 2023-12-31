'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Store } from '@prisma/client';
import { Trash } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import * as z from 'zod';

// api
import { updateStore } from '@/backend/store';

// components
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface SettingsFormProps {
  initialData: Store;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SettingsFormValues) => {
    try {
      setLoading(true);
      await updateStore(data, params.storeId);
    } catch (err) {}
  };

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title='Settings' description='Manage store preferences' />
        <Button
          disabled={loading}
          variant='destructive'
          size='sm'
          onClick={() => setOpen(true)}
        >
          <Trash className='h-4 w-4' />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-full'
        >
          <div className='grid grid-cols-3 gap-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Store name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className='ml-auto' type='submit'>
            Save changes
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SettingsForm;
