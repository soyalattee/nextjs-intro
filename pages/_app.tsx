import { AppProps } from "next/dist/shared/lib/router/router";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
//blueprint 역할. html 파일로 렌더링할때 청사진이 됨.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </div>
  );
}
