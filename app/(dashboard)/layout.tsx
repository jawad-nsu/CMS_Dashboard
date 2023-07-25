import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

const DashboardLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { storeId: string };
}) => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) redirect('/');

  return (
    <>
      <div>This is a Nav bar</div>
      {children}
    </>
  );
};

export default DashboardLayout;