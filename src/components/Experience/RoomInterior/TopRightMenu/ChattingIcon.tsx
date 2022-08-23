



type ChattingIconType = {
    setLeftSideActive : any,
    leftSideActive : string
}

const ChattingIcon = (props : ChattingIconType) => {
    return (
        <div className=" cursor-pointer chatting " onClick={() => props.leftSideActive === "chatting" ? props.setLeftSideActive("") : props.setLeftSideActive("chatting")}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.37305 14.25H5.99805C2.99805 14.25 1.49805 13.5 1.49805 9.75V6C1.49805 3 2.99805 1.5 5.99805 1.5H11.998C14.998 1.5 16.498 3 16.498 6V9.75C16.498 12.75 14.998 14.25 11.998 14.25H11.623C11.3905 14.25 11.1655 14.3625 11.023 14.55L9.89805 16.05C9.40305 16.71 8.59305 16.71 8.09805 16.05L6.97305 14.55C6.85305 14.385 6.57555 14.25 6.37305 14.25Z" stroke={props.leftSideActive === "chatting" ? "#29b080" : "#f3f3f3" } strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.25195 6H12.752" stroke={props.leftSideActive === "chatting" ? "#29b080" : "#f3f3f3" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.25195 9.75H9.75195" stroke={props.leftSideActive === "chatting" ? "#29b080" : "#f3f3f3" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default ChattingIcon