import { CreateIcon } from "assets/svgs"
import Image from "next/image"
import { useRouter } from "next/router";
import { RootStateOrAny, useSelector } from "react-redux";

const EventMorePanel = (props) => {
    const { setCreateEventToggle } = props;
    const router = useRouter()
    const { logged } = useSelector(
        (state: RootStateOrAny) => ({
            logged: state.auth.logged,
        })
    );

    const onClickCreateEvent = () => {
        if (logged) {
            setCreateEventToggle(true)
        } else {
            alert("Please login first")
            router.push({ pathname: "/" })
        }
    }

    return (
        <div className="flex flex-col justify-center items-center relative overflow-hidden cursor-pointer
                        w-full rounded-[10px] border-[1.2px] border-dashed border-[#272829] hover:border-primary transition duration-300 bg-[#131314] min-h-[240px]" onClick={() => onClickCreateEvent()}>
            <div className="p-[12px] rounded-[10px] bg-[#162724] relative">
                <div><CreateIcon /></div>
            </div>
            <span className="absolute top-[140px] text-center text-[#F3F3F3] text-[16px] font-medium mt-[10px]">Create event</span>
        </div>
    )
}

export default EventMorePanel;