import React from 'react';
import { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head></Head>
      <body>
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KZX9SCK6"
                height="0"
                width="0"
                style={{ display: 'none',  visibility: 'hidden'}} />
      </noscript>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}

export default MyDocument;