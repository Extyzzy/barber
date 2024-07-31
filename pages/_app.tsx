import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';
import Layout from './components/Layout';
import MainLogo from '../public/img/logo/logo_3.svg';
import { useSearchParams } from 'next/navigation';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.gtmDidInit) {
        if (window.gtmDidInit) {
          return false;
        }
        window.gtmDidInit = true;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];

          window.dataLayer.push({
            event: 'gtm.js',
            'gtm.start': new Date().getTime(),
            'gtm.uniqueEventId': 0,
          });

          window.dataLayer.push({
            original_location: `${document.location.protocol}//${document.location.hostname}${document.location.pathname}${document.location.search}`,
          });
        }; // this part ensures PageViews is always tracked
        script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-KZX9SCK6`;

        document.head.appendChild(script);

        return true;
      }
    }
  }, []);


  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang]);

  return (
    <I18nextProvider i18n={i18n}>

      <Layout logo={MainLogo}>
        <Head>
          <title>SELECT BARBER</title>
        </Head>
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
