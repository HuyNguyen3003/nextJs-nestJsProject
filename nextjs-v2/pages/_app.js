import MainHeader from "../component/layout/mainHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
