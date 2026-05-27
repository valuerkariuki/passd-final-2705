import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PASSD | RICS APC Support Marketplace',
  description: 'On-demand APC support marketplace for RICS candidates.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Main page content injected here */}
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        
        {/* Footer appears site-wide on all pages */}
        <Footer />
      </body>
    </html>
  );
}