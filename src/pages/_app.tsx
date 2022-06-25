import { Children, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

// For redux
import {
  Provider,
  RootStateOrAny,
  useDispatch,
  useSelector,
} from "react-redux";
import store from "redux/store";

import { checkSession } from "redux/slices/authSlice";
import { startLoadingApp, stopLoadingApp } from 'redux/slices/commonSlice';

// CSS
import 'styles/globals.css';
import 'styles/app.css';
import 'styles/custom.css';
import "animate.css/animate.min.css";
import 'font-awesome/css/font-awesome.min.css'
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch();
  const router = useRouter();

  const { logged, profileData, checkingSession } = useSelector(
    (state: RootStateOrAny) => ({
      profileData: state.profile.data,
      logged: state.auth.logged,
      checkingSession: state.auth.checkingSession,
    })
  );

  useEffect(() => {
    const currentRoute = router.pathname;
    if (currentRoute !== "/setup" && logged && !profileData.visible) {
      dispatch(startLoadingApp());
      router.push("/setup");
      return;
    }
    if (currentRoute === "/profile" && !logged && !checkingSession) {
      router.push("/");
      return;
    }
    dispatch(stopLoadingApp());
  }, [logged, profileData.visible]);

  useEffect(() => {
    dispatch(checkSession());
  }, []);

  return (
    <>
      {Children}
    </>
  );
}

function ReduxWrapped({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Solarity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
      </Head>
      <ToastContainer
        style={{ position: "fixed", zIndex: "100000000" }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default ReduxWrapped;
