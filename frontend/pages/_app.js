import "../styles/index.scss";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <div className='app_wrapper'>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
