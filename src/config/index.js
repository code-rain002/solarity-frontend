const BaseUrl = process.env.NODE_ENV === "development"
  ? process.env.NEXT_PUBLIC_LOCAL_FRONTEND_URL + "/"
  : process.env.NEXT_PUBLIC_FRONTEND_URL + "/";
export default BaseUrl;