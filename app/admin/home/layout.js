"use client";

import AdminNav from '@/components/AdminNav';
import '../../globals.css';
import { Inter } from 'next/font/google'
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  const token = Cookies.get('token');
  return (
    <html lang='en'>
      <body>
          <main className='bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] text-white min-h-screen pb-4'>
            {token && <AdminNav /> }
            {children}
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
