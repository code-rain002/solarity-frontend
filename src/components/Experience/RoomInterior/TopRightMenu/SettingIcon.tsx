


type SettingIconType = {
    setLeftSideActive : any,
    leftSideActive : string
}


const SettingIcon = (props : SettingIconType) => {
    return (
        <div className=" cursor-pointer setting " onClick={() => props.leftSideActive === "setting" ? props.setLeftSideActive("") : props.setLeftSideActive("setting")}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke={props.leftSideActive === "setting" ? "#29b080" : "#f3f3f3" } strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 9.66105V8.34105C1.5 7.56105 2.1375 6.91605 2.925 6.91605C4.2825 6.91605 4.8375 5.95605 4.155 4.77855C3.765 4.10355 3.9975 3.22605 4.68 2.83605L5.9775 2.09355C6.57 1.74105 7.335 1.95105 7.6875 2.54355L7.77 2.68605C8.445 3.86355 9.555 3.86355 10.2375 2.68605L10.32 2.54355C10.6725 1.95105 11.4375 1.74105 12.03 2.09355L13.3275 2.83605C14.01 3.22605 14.2425 4.10355 13.8525 4.77855C13.17 5.95605 13.725 6.91605 15.0825 6.91605C15.8625 6.91605 16.5075 7.55355 16.5075 8.34105V9.66105C16.5075 10.4411 15.87 11.0861 15.0825 11.0861C13.725 11.0861 13.17 12.0461 13.8525 13.2236C14.2425 13.9061 14.01 14.7761 13.3275 15.1661L12.03 15.9086C11.4375 16.2611 10.6725 16.0511 10.32 15.4586L10.2375 15.3161C9.5625 14.1386 8.4525 14.1386 7.77 15.3161L7.6875 15.4586C7.335 16.0511 6.57 16.2611 5.9775 15.9086L4.68 15.1661C3.9975 14.7761 3.765 13.8986 4.155 13.2236C4.8375 12.0461 4.2825 11.0861 2.925 11.0861C2.1375 11.0861 1.5 10.4411 1.5 9.66105Z" stroke={props.leftSideActive === "setting" ? "#29b080" : "#f3f3f3" } strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default SettingIcon