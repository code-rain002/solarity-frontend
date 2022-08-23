


type MicroIconType = {
    microState : boolean,
    setMicroState : any,
}

const MicroIcon = (props : MicroIconType) => {
    return (
        <div className=" cursor-pointer micro " onClick={props.setMicroState} >
            {
                props.microState ?
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 14.25C11.4825 14.25 13.5 12.2325 13.5 9.75V6C13.5 3.5175 11.4825 1.5 9 1.5C6.5175 1.5 4.5 3.5175 4.5 6V9.75C4.5 12.2325 6.5175 14.25 9 14.25Z" stroke="#f3f3f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.25 8.25V9.75C2.25 13.4775 5.2725 16.5 9 16.5C12.7275 16.5 15.75 13.4775 15.75 9.75V8.25" stroke="#f3f3f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.83203 5.60977C8.16703 5.12227 9.62203 5.12227 10.957 5.60977" stroke="#f3f3f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.52344 7.85945C8.42344 7.61195 9.37594 7.61195 10.2759 7.85945" stroke="#f3f3f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                :
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.365 4.8975C12.87 2.9475 11.1075 1.5 9 1.5C6.5175 1.5 4.5 3.5175 4.5 6V9.75C4.5 10.845 4.89 11.85 5.5425 12.63" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.4995 7.48438V9.74938C13.4995 12.2319 11.482 14.2494 8.99945 14.2494C8.45195 14.2494 7.91945 14.1519 7.43945 13.9719" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.39453 14.685C5.60203 15.81 7.22203 16.5 8.99953 16.5C12.727 16.5 15.7495 13.4775 15.7495 9.75V8.25" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.125 2.24219L1.875 16.4922" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.66211 4.12531V1.69531" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.375 2.625V5.625" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
            }
        </div>
    )
}

export default MicroIcon