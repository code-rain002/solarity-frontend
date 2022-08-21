import OtherFileType from "./OtherFileType";
import ImgFileType from "./ImgFileType";

type FileListPartType = {
  newMsgDataState: any;
  setNewMsgDataState: any;
  selectedFile: any;
  setSelectedFile: any;
  preview: any;
};

const FileListPart = (props: FileListPartType) => {
  let j = 0;
  return (
    <div
      id="file_list_part"
      className={` items-start gap-[16px] overflow-x-scroll overflow-y-visible rounded-bl-[15px] rounded-br-[15px]
                                        ${
                                          props.selectedFile.length != 0
                                            ? "flex px-[15px] py-[5px]"
                                            : "hidden"
                                        } `}
    >
      {props.selectedFile &&
        props.preview.map((i) => {
          if (props.selectedFile[j] != undefined) {
            let currentFileName = props.selectedFile[j].name;
            let extensionPoint = currentFileName.lastIndexOf(".");
            let extension = currentFileName.substring(extensionPoint + 1);
            let onlyName = currentFileName.substring(0, extensionPoint);
            j++;
            if (
              extension === "jpg" ||
              extension === "png" ||
              extension === "bmp" ||
              extension === "webp" ||
              extension === "svg" ||
              extension === "tiff" ||
              extension === "jpeg" ||
              extension === "gif" ||
              extension === "tif" ||
              extension === "dib"
            ) {
              return (
                <ImgFileType
                  key={j}
                  fileUrl={i}
                  setSelectedFile={props.setSelectedFile}
                  selectedFile={props.selectedFile}
                  fileName={currentFileName}
                />
              );
            } else {
              return (
                <OtherFileType
                  key={j}
                  selectedFile={props.selectedFile}
                  fileName={onlyName}
                  extension={extension.toUpperCase()}
                  fileUrl={i}
                  setSelectedFile={props.setSelectedFile}
                  originName={currentFileName}
                />
              );
            }
          }
        })}
    </div>
  );
};

export default FileListPart;
