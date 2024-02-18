export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import AppStateProvider from '@/lib/providers/state-provider';
import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider';
import { Toaster } from '@/components/ui/toaster';
import { SocketProvider } from '@/lib/providers/socket-provider';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OfficeMate || Make your office work easy!',
  description: 'OfficeMate is a platform that helps you manage your office work easily. It provides a lot of features that help you to manage your office work easily.',
  keywords: 'office, work, management, OfficeMate, platform, easy, manage office work easily, office work, office work management, office work platform, office work management platform, office work management platform easily, office work management platform easy, office work management platform easy to use, office work management platform easy to manage, office work management platform easy to manage office work, office work management platform easy to manage office work easily, office work management platform easy to manage office work easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate platform, office work management platform easy to manage office work easily with OfficeMate platform, office work management platform easy to manage office work easily with OfficeMate platform easily, office work management platform easy to manage office work easily with OfficeMate platform easily, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily, office work management platform easy to manage office work easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate platform easily with OfficeMate, office work management platform easy to manage office work easily with OfficeMate platform easily with',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <AppStateProvider>
            <SupabaseUserProvider>
              <SocketProvider>
                {children}
                <Toaster />
              </SocketProvider>
            </SupabaseUserProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
