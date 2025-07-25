import { useEffect } from "react";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
import Head from "@/components/Head";

import "@/styles/globals.css";
import "@/styles/themes.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  return (
    <Layout>
      <Head title={`Joseph Castellano | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

# touched on 2025-08-14T19:55:44.856777Z
# touched on 2025-08-14T19:55:46.891458Z
# touched on 2025-08-14T19:56:09.272911Z
# touched on 2025-08-14T19:56:38.008431Z
# touched on 2025-08-14T19:56:40.080395Z
# touched on 2025-08-14T19:57:03.366741Z