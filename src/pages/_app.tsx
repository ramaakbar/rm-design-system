import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

import Layout from "@/components/layout";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>

      <Head>
        <title>RM Design System</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Script
        defer
        data-domain="ui.ramaakbar.xyz"
        src="https://analytics.ramaakbar.xyz/js/script.js"
      />

      <ThemeProvider defaultTheme="light" enableSystem attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
