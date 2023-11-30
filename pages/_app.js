import Layout from "../components/layout/layout";
import "../styles/globals.css";

import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    // Provider allows extra requests to the Network. It is a recommended optimization.
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
