import '../styles/globals.css';
import { NextIntlProvider } from 'next-intl';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { Provider as NextProvider } from 'next-auth/client';
import Aside from '../components/Aside';
import DropDownMenu from '../components/DropDownMenu';

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Head>
        <title>Astro Coldbrew Coffee</title>
        <meta name="description" content="Astro Coldbrew Coffee" />
        <link rel="icon" href="/astro.gif" />
      </Head>
      <NextIntlProvider
        formats={{
          dateTime: {
            short: 'dd/MM/yyyy',
          },
        }}
        messages={pageProps.messages}
        now={Date.now()}
        timeZone="Asia/Ho_Chi_Minh"
      >
        <main className="h-screen overflow-hidden flex items-center justify-center">
          <div className="flex h-screen bg-gray-800">
            <Aside />
            <NextProvider session={pageProps.session}>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </NextProvider>
          </div>
        </main>
      </NextIntlProvider>
    </>
  );
}

export default App;
