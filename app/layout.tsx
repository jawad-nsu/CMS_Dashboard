import './globals.css';

import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ModalProvider } from './../provider/modal-provider';
import { ToastProvider } from '@/provider/toast-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CMS Admin Dashboard',
  description: 'CMS Admin Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <ToastProvider />
        <ModalProvider />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
