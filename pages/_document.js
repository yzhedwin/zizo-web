import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/assets/logo.png" />
          <link rel="apple-touch-icon" href="/assets/logo.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta name="description" content="Edwin's Portfolio PWA web page" />
          <meta property="og:title" content="Edwin" />
          <meta property="og:description" content="Edwin's Portfolio PWA web page" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
