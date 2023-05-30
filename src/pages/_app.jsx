import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const monteserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${monteserrat.variable} font-montserrat`}>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        position={"top-center"}
      />
      <Component {...pageProps} />
    </main>
  );
}
