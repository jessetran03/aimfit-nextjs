import "../styles/globals.css";
import type { AppProps } from "next/app";
import LeftNavigation from "../components/left-navigation";
import NavigationBar from "../components/navigation-bar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <LeftNavigation />
      <NavigationBar />
      <div className="ml-48">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
export default MyApp;
