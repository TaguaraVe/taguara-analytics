import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Taguata Digital | Analytics',
  description: 'Desarrollo de Paneles de control para analisis de datos',
  keywords: [
    'Tableau, KPI, Dashboard, analisis de datos, visualizacion, datos,',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <div className="pt-[var(--header-height)] min-h-[calc(100vh-(var(--header-height)))]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
