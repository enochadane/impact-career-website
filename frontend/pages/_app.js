import "../styles/index.scss";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="app_wrapper">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
