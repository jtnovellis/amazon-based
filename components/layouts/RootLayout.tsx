import Head from 'next/head';
import { ReactNode } from 'react';
import Header from '../Header';

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Amazon clone</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default RootLayout;
