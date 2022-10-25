import Image from "next/image";

export interface DaoPanelProps {
  imageSrc: any;
  backSrc: any;
  title: string;
  selected: boolean;
  onClick: any;
}

const DaoPanel = (props: DaoPanelProps) => {
  return (
    <div className={`relative w-full h-[180px] rounded-[20px] border-[1.5px] ${props.selected ? 'border-primary' : 'border-white/10'} z-10 bg-transparent max-w-[180px] m-auto hover:border-primary hover:cursor-pointer`} onClick={props.onClick}>
      <div className="absolute top-0 left-0 w-[100%] rounded-[20px] dao-panel h-[91px] max-w-[180px]">
        <Image
          src={props.backSrc}
          alt={props.title}
          layout="fill"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="absolute top-[calc(50%-30px)] left-[calc(50%-32px)] m-auto w-[64px] h-[64px] rounded-[12px] overflow-hidden">
        <Image
          src={props.imageSrc}
          alt={props.title}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="relative mt-[128px] text-center">
        <span className="text-[14px] text-[#f3f3f3]">{props.title}</span>
      </div>
      <div
        className={` top-[18px] left-[18px] ${props.selected ? "absolute" : "hidden"
          } `}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="#29B080"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.75 12.0019L10.58 14.8319L16.25 9.17188"
            stroke="#29B080"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default DaoPanel;
