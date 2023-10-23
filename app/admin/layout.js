"use client";

import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RootLayout = ({ children }) => {
  const token = Cookies.get('token');
  const router = useRouter();

  useEffect(() => {
    if(!token) {
        router.push('/404')
    }
  }, [token, router])

  return (
    <html lang='en'>
      <body>
          <main>
            {children}
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
