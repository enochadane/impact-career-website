import "../styles/index.scss";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/theme";
import { Provider } from "react-redux";

import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className='app_wrapper'>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
