import Head from 'next/head';
import { ReactNode } from 'react';
import Header from '../Header';

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon clone</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='max-w-screen-2xl mx-auto'>{children}</main>
    </div>
  );
}

export default RootLayout;
