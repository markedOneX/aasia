import "../styles/globals.css";
import Link from "next/link";
import { Provider } from "react-redux";
import Store from "../features/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <nav style={{ width: "100%", background: "rgb(143, 162, 214)" }}>
        <Link href={"/account/login"}>
          <a className="navbarOptions">/VariantFirst</a>
        </Link>
        <Link href={"/variant_two"}>
          <a className="navbarOptions">/VariantSecond</a>
        </Link>
      </nav>

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
