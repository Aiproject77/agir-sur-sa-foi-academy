import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#f5f3ee" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          {/* SEO */}
          <meta name="description" content="Acting on His Word Academy — Free biblical courses on God's Power. Learn to walk in Holy Spirit manifestations. Bilingual EN/FR." />
          <meta name="keywords" content="holy spirit, faith, healing, miracles, bible course, christian academy, word of knowledge, prophecy, gifts of the spirit" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://asfacademy.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
