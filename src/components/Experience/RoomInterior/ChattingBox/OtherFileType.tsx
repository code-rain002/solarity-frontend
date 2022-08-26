type OtherFileTypeType = {
  fileName: string;
  extension: string;
  fileUrl: string;
  selectedFile: any;
  setSelectedFile: any;
  originName: string;
};

const OtherFileType = (props: OtherFileTypeType) => {
  let fileName = props.fileName;
  const splitedFileNameArray = fileName.split("/");
  fileName = splitedFileNameArray[splitedFileNameArray.length - 1];
  const delSelf = () => {
    let newPreview = [];
    for (let u of props.selectedFile) {
      if (u.name === props.originName) {
        continue;
      }
      newPreview.push(u);
    }
    props.setSelectedFile(newPreview);
  };
  return (
    <div
      className={`${
        props.selectedFile === "__FOR__UPLOADED__FILES__" ? "mt-[5px]" : ""
      } flex p-[12px] items-center font-['Outfit'] font-[500] text-[12px] rounded-[14px] min-w-[150px] h-[62px]
                      cursor-default relative bg-[#1f1f20]`}
      id={props.fileUrl}
    >
      <div className="flex items-center justify-center min-h-[40px] min-w-[40px] rounded-[10px] bg-[#2c2c2e] ">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6668 6.66671V10C14.6668 13.3334 13.3335 14.6667 10.0002 14.6667H6.00016C2.66683 14.6667 1.3335 13.3334 1.3335 10V6.00004C1.3335 2.66671 2.66683 1.33337 6.00016 1.33337H9.3335"
            stroke="#b3b3b7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6668 6.66671H12.0002C10.0002 6.66671 9.3335 6.00004 9.3335 4.00004V1.33337L14.6668 6.66671Z"
            stroke="#b3b3b7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col ml-[12px] w-[130px] truncate">
        <div className="text-[#b3b3b7] truncate">{fileName}</div>
        <div className="text-[#929298]">{props.extension}-file</div>
      </div>

      <div
        className={`${
          props.selectedFile === "__FOR__UPLOADED__FILES__" ? "hidden" : ""
        } absolute top-[-3px] right-[-3px] p-[5px] bg-[#2c2c2e] rounded-[20px] overflow-hidden cursor-pointer`}
        onClick={delSelf}
      >
        <svg
          width="7"
          height="7"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9564 11.866L8.09082 7.00028L12.9565 2.13454C13.2581 1.83292 13.2581 1.34528 12.9565 1.04365C12.6548 0.742024 12.1672 0.742024 11.8656 1.04365L6.99995 5.90939L2.13428 1.04365C1.83265 0.742024 1.34503 0.742024 1.04341 1.04365C0.741781 1.34528 0.741781 1.83292 1.04341 2.13454L5.90905 7.00028L1.04341 11.866C0.741781 12.1676 0.741781 12.6553 1.04341 12.9569C1.19383 13.1073 1.3914 13.1829 1.58884 13.1829C1.78629 13.1829 1.98386 13.1073 2.13428 12.9569L2.09892 12.9215L2.13428 12.9569L6.99993 8.09117L11.8656 12.9569C12.016 13.1073 12.2136 13.1829 12.411 13.1829C12.6085 13.1829 12.806 13.1073 12.9564 12.9569L12.9211 12.9215L12.9564 12.9569C13.2581 12.6553 13.2581 12.1676 12.9564 11.866Z"
            fill="#b3b3b7"
            stroke="#b3b3b7"
            strokeWidth="0.1"
          />
        </svg>
      </div>
    </div>
  );
};

export default OtherFileType;
