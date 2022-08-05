

type RoomInfoDlgTextType = {
    text : string
}
const RoomInfoDlgText = (props : RoomInfoDlgTextType) => {
    return (
        <div className="font-['Outfit'] font-[400] text-[16px] text-[#b3b3b7] pt-[12px]">
            {props.text}
        </div>
    )
}

export default RoomInfoDlgText