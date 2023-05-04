import "bootstrap/dist/css/bootstrap.css";
import Header from "@component/components/Header";
import Footer from "@component/components/Footer";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
