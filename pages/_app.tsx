import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import '../styles/theme.css'
import '../styles/theme.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Router from 'next/router';
import Loader from '../components/PageContent/Loader/Loader';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App({ Component, pageProps }: AppProps) {  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoading = () => setLoading(true);
    const endLoading = () => setLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);      
    };
    
  }, []);
  if (typeof window !== 'undefined') {
    // load the bootstrap JS file
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }
  return <>
    <Provider store={store}>
      {loading && <Loader />}
      <Component {...pageProps} />
    </Provider>
  </>
}
