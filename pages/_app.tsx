import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import Layout from './components/Layout';
import MainLogo from '../public/img/logo/logo_3.svg';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout logo={MainLogo}>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}

export default appWithTranslation(MyApp)
