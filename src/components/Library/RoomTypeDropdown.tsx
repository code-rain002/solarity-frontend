import { DownArrow, UpArrow } from "components/icons"
import { useState, useEffect } from "react"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { changeInfo } from "redux/slices/eventSlice"


const ItemListBox = ({ children }) => {
    return (
        <div className={`flex flex-col absolute w-[80%] top-[45px] left-[0px] text-center font-400 text-[16px] text-[#f3f3f3] z-[1000] p-[8px] bg-globalBgColor border-[1.5px] border-[#272829] rounded-[12px] cursor-pointer`}>
            {children}
        </div>
    )
}

const RoomTypeDropdown = (props) => {
    const dispatch = useDispatch()
    const { items } = props;
    const { eventInfo, step } = useSelector(
        (state: RootStateOrAny) => ({
            eventInfo: state.event.eventInfo,
            step: state.event.step
        })
    );
    const [toggleStatus, setToggleStatus] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(eventInfo.isPrivate)
    }, [])

    useEffect(() => {
        const payload = {
            value: activeIndex,
            type: "isPrivate"
        }
        dispatch(changeInfo({ payload: payload }))
    }, [activeIndex])

    const item_list = items.map((i, j) => {
        return (
            <div className={`hover:bg-[#272829] rounded-[6px] pt-[2px] pb-[6px] ${activeIndex === j ? "text-primary" : ""}`} onClick={() => setActiveIndex(j)} key={j}>{i}</div>
        )
    })

    return (
        <div className="relative flex justify-around w-full items-center cursor-pointer" onClick={() => setToggleStatus(!toggleStatus)}>
            <div className="font-extralight text-[16px] text-[#f3f3f3]">
                {items[activeIndex]}
            </div>
            <div className={`pt-[5px]`}>
                {toggleStatus ? <UpArrow /> : <DownArrow />}
            </div>
            {toggleStatus ? <ItemListBox>{item_list}</ItemListBox> : ""}
        </div>
    )
}

export default RoomTypeDropdown