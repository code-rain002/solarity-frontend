import Image from "next/image";

type ImgFileTypeType = {
  fileUrl: string;
  selectedFile: any;
  setSelectedFile: any;
  fileName: string;
};

const ImgFileType = (props: ImgFileTypeType) => {
  const delSelf = () => {
    let newPreview = [];
    for (let u of props.selectedFile) {
      if (u.name === props.fileName) {
        continue;
      }
      newPreview.push(u);
    }
    props.setSelectedFile(newPreview);
  };
  return (
    <div
      className={`flex items-center rounded-[14px] ${props.selectedFile === "__FOR__UPLOADED__FILES__"
        ? "w-[80px] h-[80px] mt-[5px]"
        : "w-[60px] h-[60px]"
        }
      cursor-default bg-[#1f1f20] relative`}
      id={props.fileUrl}
    >
      <div className="rounded-[14px] overflow-hidden w-full h-full ">
        <Image
          src={props.fileUrl}
          layout="fixed"
          width={props.selectedFile === "__FOR__UPLOADED__FILES__" ? 80 : 62}
          height={props.selectedFile === "__FOR__UPLOADED__FILES__" ? 80 : 62}
        />
      </div>
      <div
        className={`${props.selectedFile === "__FOR__UPLOADED__FILES__" ? "hidden" : ""
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

export default ImgFileType;
