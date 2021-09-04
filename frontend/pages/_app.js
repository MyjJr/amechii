import "../styles/main.scss";
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../fontawesome";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
