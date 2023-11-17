
"use client";
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../utils/theme-provider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cookies from 'js-cookie';

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-Ubuntu",
})

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${ubuntu.variable} main-scrollbar min-h-screen bg-no-repeat bg-gradient-to-r from-[#ff69b0] to-[#ffb5a8] dark:bg-gradient-to-r dark:from-[#0b131c] dark:to-[#1b283d] duration-100 text-white`}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            <Navbar token={Cookies.get("token")} />
            <div className="w-[95%] md:w-[80%] mx-auto mb-8">
              {children}
            </div>
            <Footer />
          </ThemeProvider>  
      </body>
    </html>
  )
}
