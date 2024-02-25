import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'

import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/ui/dashboard/header';
import SecondaryNav from '@/app/ui/dashboard/secondaryNav';
import Footer from '@/app/ui/dashboard/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
    </html>
  );
}
