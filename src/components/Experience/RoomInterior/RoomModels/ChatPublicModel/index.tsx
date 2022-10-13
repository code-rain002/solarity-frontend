import HubChat from "./HubChat";
import GalleryChat from "./GalleryChat";
import PlazaChat from "./PlazaChat";
import { useEffect } from "react";

const ChatPublicModel = ({ roomType, modelURL, name, creator, slideUrls }) => {

  return (
    <div>
      {roomType == 0 && (
        <HubChat modelURL={modelURL} name={name} />
      )}
      {roomType == 1 && (
        <GalleryChat modelURL={modelURL} name={name} />
      )}
      {roomType == 2 && (
        <PlazaChat modelURL={modelURL} name={name} creator={creator} slideUrls={slideUrls} />
      )}
    </div>
  );
}

export default ChatPublicModel;