import base58 from "bs58";
import Web3 from "web3";
import {
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

export const signMessage = async (
  type: "solana" | "ethereum",
  message: string,
  provider: any,
  walletAddress: string
) => {
  let signature;
  if (type === "solana") {
    const messageToSign = new TextEncoder().encode(message);
    let signatureEncoded = await provider.signMessage(messageToSign);
    signature = base58.encode(signatureEncoded.signature);
  } else {
    let web3 = new Web3(provider);
    signature = await web3.eth.personal.sign(message, walletAddress, "");
  }
  return signature;
};

export const getCoinBalance = async (type: "sol" | "eth", address: string) => {
  let balance = 0;
  try {
    if (type === "sol") {
      const publicKey = new PublicKey(address);
      const connection = new Connection(
        clusterApiUrl("mainnet-beta"),
        "confirmed"
      );
      const rawBalance =
        (await connection.getBalance(publicKey)) / LAMPORTS_PER_SOL;
      balance = Number(rawBalance.toFixed(4));
    } else {
      const web3 = new Web3("https://cloudflare-eth.com/");
      const rawBalance = await web3.eth.getBalance(address);
      balance = Number(Web3.utils.fromWei(rawBalance));
      balance = Number(balance.toFixed(4));
    }
  } catch (err) {}
  return balance;
};

export const connectWallet = async (type: "sol" | "eth", wallet: string) => {
  if (type == "sol") {
    if (!("solana" in window)) {
      throw false;
    }
    const _window = window as unknown as { solana: any };
    const solana = _window.solana;
    if (wallet === "phantom" && solana.isPhantom) {
      return solana;
    }

    return false;
  } else {
    // implement ethereum later
    throw false;
  }
};
