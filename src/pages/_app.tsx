import React from 'react';
import 'styles/main.scss';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProps } from 'next/dist/shared/lib/router/router';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
