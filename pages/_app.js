import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'styles/Main.scss'
import 'styles/global.css'
import Head from "next/head";
import { useEffect } from "react";
import AppProvider from "components/AppProvider";

function MyApp({ Component, pageProps }) {
// import bootstrap with js dependencies
    useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
    }, []);

  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp;
