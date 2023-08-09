// app.tsx
import React from 'react';
import { AppType } from 'next/dist/shared/lib/utils';
import '~/styles/globals.css';
import Navbar from './navbar'; // Update the path according to your folder structure
import {useEffect} from 'react';
import trigger from './index';

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      trigger(); // Call the trigger function on the client side
    }
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;