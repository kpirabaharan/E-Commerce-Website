import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';
import ThemeProvider from '@/providers/ThemeProvider';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <Navbar />
          <ModalProvider />
          <ToastProvider />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
