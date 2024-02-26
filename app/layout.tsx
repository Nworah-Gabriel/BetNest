import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/ui/global.css'

import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/ui/dashboard/header';
import SecondaryNav from '@/app/ui/dashboard/secondaryNav';
import Footer from '@/app/ui/dashboard/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BetNest',
  description: 'Connect and Play',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <div className="flex flex-col lg:flex-row lg:overflow-hidden bg-blue-950">
        <div className="flex-none lg:w-64">
          <SideNav />
        </div>
        <div className="flex-grow md:py-2 md:px-2 w-full lg:p-10">
        <Header />
        <SecondaryNav />
        {children}
        <Footer />
        </div>
        </div>
      </body>
    </html>
  );
}
