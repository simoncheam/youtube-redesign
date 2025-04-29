import type React from 'react';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/common/theme/theme-provider';
import { ResponsiveLayout } from '@/components/layouts/responsive-layout';
import { Toaster } from '@/components/ui/sonner';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YouTube Redesign',
  description: 'A modern YouTube UI redesign built with Next.js and Tailwind CSS',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='h-full'>
      <body className={`${inter.className} bg-youtube-black text-white h-full`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          disableTransitionOnChange>
          <ResponsiveLayout>{children}</ResponsiveLayout>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
