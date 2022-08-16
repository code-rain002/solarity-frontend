import { CreateIcon } from "assets/svgs"
import Image from "next/image"

const EventMorePanel = (props) => {
    const { icon, caption, onClick } = props;

    return (
        <div className="flex flex-col justify-center items-center relative overflow-hidden cursor-pointer
                        w-full rounded-[20px] border-[1.2px] border-dashed border-[#272829] hover:border-primary transition duration-300 bg-[#131314]" onClick={() => {}}>
            <div className="p-[12px] rounded-[10px] bg-[#162724] relative">
                <div><CreateIcon /></div>
            </div>
            <span className="absolute top-[130px] text-center text-[#F3F3F3] text-[16px] font-medium mt-[10px]">Create event</span>
        </div>
    )
}

export default EventMorePanel;