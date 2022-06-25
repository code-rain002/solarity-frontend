import { io } from "socket.io-client";

const socket = () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transport: ["websocket"],
    secure: true,
    rejectUnauthorized: false,
  };
  return io(
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL
      : process.env.NEXT_PUBLIC_BACKEND_URL,
    options
  );
};
export default socket;
