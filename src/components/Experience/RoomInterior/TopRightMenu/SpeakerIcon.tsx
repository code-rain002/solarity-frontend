


type SpeakerIconType = {
    speakerState : boolean,
    setSpeakerState : any,
}

const SpeakerIcon = (props : SpeakerIconType) => {
    return (
        <div className=" cursor-pointer speaker " onClick={props.setSpeakerState}>
            {
                props.speakerState ?
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 7.49838V10.4984C1.5 11.9984 2.25 12.7484 3.75 12.7484H4.8225C5.1 12.7484 5.3775 12.8309 5.6175 12.9734L7.8075 14.3459C9.6975 15.5309 11.25 14.6684 11.25 12.4409V5.55588C11.25 3.32088 9.6975 2.46588 7.8075 3.65088L5.6175 5.02338C5.3775 5.16588 5.1 5.24838 4.8225 5.24838H3.75C2.25 5.24838 1.5 5.99838 1.5 7.49838Z" stroke="#F3F3F3" strokeWidth="1.5"/>
                        <path d="M13.5 6C14.835 7.7775 14.835 10.2225 13.5 12" stroke="#F3F3F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.873 4.125C17.0405 7.0125 17.0405 10.9875 14.873 13.875" stroke="#F3F3F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                :
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 6.27588V5.55588C11.25 3.32088 9.6975 2.46588 7.8075 3.65088L5.6175 5.02338C5.3775 5.16588 5.1 5.24838 4.8225 5.24838H3.75C2.25 5.24838 1.5 5.99838 1.5 7.49838V10.4984C1.5 11.9984 2.25 12.7484 3.75 12.7484H5.25" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.80664 14.3459C9.69664 15.5309 11.2491 14.6684 11.2491 12.4409V9.71094" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.1075 7.06641C14.7825 8.67891 14.58 10.5614 13.5 12.0014" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.863 5.85156C16.9655 8.46906 16.6355 11.5291 14.873 13.8766" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.5 1.5L1.5 16.5" stroke="#FF5454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                
            }
        </div>
    )
}

export default SpeakerIcon