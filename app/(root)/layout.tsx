import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export const SetupPage = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const store = await prismadb.store.findFirst({
    userId,
  });

  if (store) redirect(`/${store.id}`);

  return <div>{children}</div>;
};
