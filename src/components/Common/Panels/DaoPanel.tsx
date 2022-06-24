import Image from "next/image";

export interface DaoPanelProps {
  imageSrc: any;
  backSrc: any;
  title: string;
}

const DaoPanel = (props: DaoPanelProps) => {
  return (
    <div className="relative w-full h-[180px] rounded-[20px] border-[1.5px] border-white/10 z-10 bg-transparent">
        <div className="absolute top-0 left-0 w-[100%] rounded-[20px] dao-panel h-[71px]">
            <Image
                src={props.backSrc}
                alt={props.title}
                layout="fill"
            />
        </div>
        <div className="absolute top-[calc(50%-45px)] left-[calc(50%-32px)] m-auto w-[64px]">
            <Image
                src={props.imageSrc}
                alt={props.title}
            />
        </div>
        <div className="relative mt-[118px] text-center">
            <span className="text-[14px] text-[#f3f3f3]">{props.title}</span>
        </div>
        
    </div>
  );
};

export default DaoPanel;
