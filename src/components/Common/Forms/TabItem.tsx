
const TabItem = (props) => {
    return (
        <div className={`flex items-center py-[20px] font-500 text-[18px] px-[15px] cursor-pointer
                        hover:text-[#f3f3f3] select-none
                        ${props.selectedStatus ? 'border-b-[2px] border-[#f3f3f3] text-[#f3f3f3]' : 'border-b-[2px] border-transparent text-[#929298]'}`}
                        onClick={props.onClick}>
            {props.title}
        </div>
    )
}

export default TabItem