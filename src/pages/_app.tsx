import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import { ConnectionProvider, useWallet, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  BackpackWalletAdapter
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { MetaplexProvider } from "providers/MetaplexProvider";
// For redux
import {
  Provider,
  RootStateOrAny,
  useDispatch,
  useSelector,
} from "react-redux";
import store from "../redux/store";

import { checkSession } from "redux/slices/authSlice";
import { setIsMobile, startLoadingApp, stopLoadingApp } from "redux/slices/commonSlice";
import useWindowDimensions from "utils/layout";

// CSS
import "styles/globals.css";
import "styles/app.css";
import "styles/custom.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'styles/wallet.css';
import AppLoader from "components/Layout/AppLoader";
import { checkBrowser } from "utils";

const endpoint = "https://ssc-dao.genesysgo.net";

// const WalletProvider = dynamic(
//   () => import("utils/contexts/ClientWalletProvider"),
//   {
//     ssr: false,
//   }
// );

function MyApp({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const dimensions = useWindowDimensions();
  const wallet = useWallet();
  const { asPath } = router;
  
  useEffect(() => {
    if (!wallet.connected && asPath !== "/" ) {
      alert('Please connect wallet first')
      router.push({ pathname: '/' })
    }
  }, [wallet.connected])

  const [network, setNetwork] = useState(WalletAdapterNetwork.Mainnet);

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new GlowWalletAdapter(),
      // new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      // new TorusWalletAdapter(),
      new BackpackWalletAdapter()
    ],
    [network]
  );

  const { logged, profileData, checkingSession } = useSelector(
    (state: RootStateOrAny) => ({
      profileData: state.profile.data,
      logged: state.auth.logged,
      checkingSession: state.auth.checkingSession,
    })
  );

  const handleChange = (event) => {
    switch (event.target.value) {
      case "devnet":
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
      case "mainnet":
        setNetwork(WalletAdapterNetwork.Mainnet);
        break;
      case "testnet":
        setNetwork(WalletAdapterNetwork.Testnet);
        break;
      default:
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
    }
  };

  useEffect(() => {
    dispatch(checkSession());
  }, []);

  useEffect(() => {
    dispatch(setIsMobile(checkBrowser()));
  }, [dimensions]);

  useEffect(() => {
    const currentRoute = router.pathname;
    if (currentRoute === "/profile" && !logged && !checkingSession) {
      router.push("/");
      return;
    }
    dispatch(stopLoadingApp());
  }, [logged]);

  return (
    <div>
      <ConnectionProvider endpoint={'https://tiniest-responsive-cloud.solana-mainnet.discover.quiknode.pro/2f87fef26a0de6ba748209443bb4b121de112b38/'}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <MetaplexProvider>
              {children}
            </MetaplexProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

function ReduxWrapped({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Solarity</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <MyApp>
        <AppLoader />
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
      </MyApp>
    </Provider>
  );
}

export default ReduxWrapped;
