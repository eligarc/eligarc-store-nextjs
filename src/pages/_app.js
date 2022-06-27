import '../styles/globals.css';
import Header from '@components/Header';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <>
        <Head>
          <title>eligarc shop</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </>
    </AppContext.Provider>
  );
}

export default MyApp;
