import withRedux from 'next-redux-wrapper';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';
import {withRouter} from 'next/router';
import {Provider} from 'react-redux';
import App from 'next/app';
import Layout from '../src/components/Layout';

import theme from '../src/theme';
import '../public/static/css/style.css';
import '../public/static/css/styles.css';

import {PersistGate} from 'redux-persist/integration/react';

// import { persistor, store , createStoreX } from '../src/store/createStore';
import {persistor, store, createStoreX} from 'redux/store/createStore';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {Component, pageProps, router} = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate
              loading={<Component {...pageProps} />}
              persistor={persistor}
            >
              <GlobalStyle />
              <Layout>
                <Component router={router} {...pageProps} />
              </Layout>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(createStoreX)(withRouter(MyApp));
