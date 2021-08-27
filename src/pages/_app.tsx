import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/navigation-bar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <NavigationBar />
      <div className="">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
export default MyApp;
