import OwnFirst from "./OwnFirst";
import OwnSecond from "./OwnSecond";
import OwnThird from "./OwnThird";

const ChatPrivateModel = ({ modelURL, modelNo, roomInfo, name }) => {
  if (modelNo == 1) {
    return (
      <OwnFirst modelURL={modelURL} roomInfo={roomInfo} name={name} />
    );
  } else if (modelNo == 2) {
    return (
      <OwnSecond modelURL={modelURL} roomInfo={roomInfo} name={name} />
    );
  }
  return (
    <OwnThird modelURL={modelURL} roomInfo={roomInfo} name={name} />
  );
}

export default ChatPrivateModel;