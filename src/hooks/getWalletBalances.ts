import {
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import Promise from "bluebird";
import { RootStateOrAny, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apiCaller } from "utils/fetcher";
import solanaIcon from "../assets/images/icons/solana.png";
import ethereumIcon from "../assets/images/icons/ethereum.png";
import axios from "axios";
import Web3 from "web3";

export const getWalletBalances = ({
  solanaAddress,
  ethereumAddress,
}: {
  solanaAddress?: string;
  ethereumAddress?: string;
}): { tokens: any[]; coins: any[]; loading: Boolean; error: Boolean } => {
  const [tokens, setTokens] = useState<any[]>([]);
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { logged, profileData } = useSelector((state: RootStateOrAny) => ({
    logged: state.auth.logged,
    profileData: state.profile.data,
  }));

  if ((!solanaAddress || !ethereumAddress) && logged) {
    solanaAddress = profileData.solanaAddress;
    ethereumAddress = profileData.ethereumAddress;
  }
  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const getTokens = async () => {
    if (!solanaAddress) return;
    let {
      data: { tokenAddresses },
    } = await apiCaller("/daos/tokens");
    const publicKey = new PublicKey(String(solanaAddress));
    const tokenKeys = (<[{ tokenAddress: string }]>tokenAddresses).map(
      ({ tokenAddress }) => ({
        tokenKey: new PublicKey(tokenAddress),
        tokenAddress,
      })
    );
    const results = await Promise.map(
      tokenKeys,
      async ({ tokenKey, tokenAddress }) => {
        try {
          const info = await connection.getParsedTokenAccountsByOwner(
            publicKey,
            {
              mint: tokenKey,
            }
          );
          const { value } = info;
          let balance =
            value[0].account.data.parsed.info.tokenAmount.uiAmountString;
          if (balance) {
            const {
              data: {
                data: { value: price },
              },
            } = await axios.get(
              "https://public-api.birdeye.so/public/price?address=" +
                tokenAddress
            );
            return {
              balance: parseFloat(Number(balance).toFixed(4)),
              usdValue: Number((price * balance).toFixed(4)),
            };
          } else return { balance: 0, usdValue: 0 };
        } catch (err) {
          return { balance: 0, usdValue: 0 };
        }
      }
    );
    const balances = (<
      [
        {
          token: string;
          image: string;
          tokenAddress?: string;
          showOnZero?: boolean;
        }
      ]
    >tokenAddresses).map(
      ({ token, image, tokenAddress, showOnZero }, index) => {
        return {
          showOnZero,
          title: token,
          symbol: token,
          image,
          tokenAddress,
          ...results[index],
        };
      }
    );
    setTokens(balances);
  };

  const getCoins = async () => {
    if (!solanaAddress && !ethereumAddress) return;
    const coins = [];
    let {
      data: {
        solana: { usd: solanaPrice },
        ethereum: { usd: ethereumPrice },
      },
    } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana,ethereum&vs_currencies=usd"
    );
    if (solanaAddress) {
      const solBalance = await connection.getBalance(
        new PublicKey(solanaAddress)
      );
      const balance = Number(solBalance / LAMPORTS_PER_SOL);
      const usdValue = Number((balance * solanaPrice).toFixed(4));
      coins.push({
        title: "Solana",
        symbol: "SOL",
        usdValue,
        balance: parseFloat(balance.toFixed(4)),
        image: solanaIcon.src,
      });
    }
    if (ethereumAddress) {
      const web3 = new Web3("https://cloudflare-eth.com/");
      const rawBalance = await web3.eth.getBalance(ethereumAddress);
      let balance = Number(Web3.utils.fromWei(rawBalance));
      coins.push({
        title: "Ethereum",
        symbol: "ETH",
        usdValue: Number((ethereumPrice * balance).toFixed(4)),
        balance: parseFloat(balance.toFixed(4)),
        image: ethereumIcon.src,
      });
    }
    setCoins(coins);
  };

  const getAllData = async () => {
    setLoading(true);
    setError(false);
    try {
      await Promise.all([getTokens(), getCoins()]);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);
  return { tokens, coins, loading, error };
};
