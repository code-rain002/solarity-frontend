import { toast } from "react-toastify";

export const minifyNumber = (num: number): number | string => {
  if (num < 1000) return num;
  const newNum = num.toString();
  return newNum.substring(0, newNum.length - 3) + "K";
};

export const minifyAddress = (address: string, rate?: number): string => {
  if (address == null) return "";
  if (address.length <= 5) return address;
  return (
    address.substring(0, rate || 3) +
    "..." +
    address.substring(address.length - (rate || 3), address.length)
  );
};

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });
};

export const getNftDetails = async (mintAddress: string) => {
  try {
    const details = await fetch(
      `https://api.all.art/v1/solana/${mintAddress}`,
      {
        mode: "cors",
        credentials: "omit",
      }
    );
    const data = await details.json();
    return data;
  } catch (err) {
    return false;
  }
};

export const extractError = (
  err: any
) => {
  let message = "Something went wrong on the server";
  try {
    message = err.response.data.message;
  } catch { }
  return message;
};

export const checkBrowser = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator ? navigator.userAgent : "")
}

// Set empty string if param is undefined
export const setValue = (str) => {
  if (str == undefined || str == null) {
    str = "";
  }
  return str;
}