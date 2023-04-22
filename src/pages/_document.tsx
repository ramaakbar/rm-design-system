import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          data-domain="ui.ramaakbar.xyz"
          src="https://analytics.ramaakbar.xyz/js/script.js"
        ></script>
      </Head>
      <body className="bg-background font-sans text-foreground antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
