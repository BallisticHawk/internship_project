// app.tsx
import React from 'react';
import { AppType } from 'next/dist/shared/lib/utils';
import '~/styles/globals.css';
import Navbar from './navbar'; // Update the path according to your folder structure

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;