
import SocialIcon from "components/Common/SocialIcon"
import Image from "next/image"
import ReactHtmlParser from 'react-html-parser'
type Props = {
    avatarUrl : string,
    domainName : string,
    date : string,
    content : string,
    imageUrl? : string,
    retweets? : number,
    twWithQuotes? : number,
    likes? : number
}


const ProfileFeed = (props : Props) => {
    return (
        <div className="p-8  flex flex-row justify-start bg-[#181818] rounded-[20px] mb-[32px]">
            <div className="feedavatar mr-6 min-w-[40px]">
                <Image src={props.avatarUrl} width={40} height={40} alt="feed avatar" />
            </div>

            <div className="flex flex-col ">
                <div className="flex flex-row items-center">
                    <div className="profileFeedName text-[#929298] font-500 text-[16px]">
                        {props.domainName}
                    </div>
                    <div className="profileFeedDate text-[#474749] font-400 text-[14px] pl-2">{props.date}</div>
                </div>

                <div className="profileFeed font-400 text-[#b3b3b7] text-[20px] leading-[200%] flex-wrap">
                    {ReactHtmlParser(props.content)}
                </div>
                <div className={props.imageUrl ? "my-[32px]" : ""}>
                    {props.imageUrl ? <Image src={props.imageUrl} width={680} height={383} alt="feed image" /> : ''}
                </div>
                
                <div className="flex flex-row text-[#929298] font-500 text-[16px]">
                    <div>
                        {props.retweets ? props.retweets : ''}
                    </div>{' '}
                    <div className="mx-[5px]">
                        {props.retweets ? ReactHtmlParser('retweets <div style="display:inline-block; width:12px"></div>•') : ''}
                    </div>
                    <div className="mx-[5px]">
                        {props.twWithQuotes ? props.twWithQuotes : ''}
                    </div>{' '}
                    <div className="mx-[5px]">
                        {props.twWithQuotes ? ReactHtmlParser('tweets with quotes <div style="display:inline-block; width:12px"></div>•') : ''}
                    </div>
                    <div className="mx-[5px]">
                        {props.likes ? props.likes : ''}
                    </div>{' '}
                    <div className="mx-[5px]">
                    {props.likes ? 'likes' : ''}
                    </div>
                </div>

                <div className="flex flex-row text-[#929298] font-500 text-[16px] my-[24px]">
                    <SocialIcon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.41203 13.8738C8.18537 13.9538 7.81203 13.9538 7.58537 13.8738C5.65203 13.2138 1.33203 10.4605 1.33203 5.7938C1.33203 3.73381 2.99203 2.06714 5.0387 2.06714C6.25203 2.06714 7.32537 2.65381 7.9987 3.56047C8.67203 2.65381 9.75203 2.06714 10.9587 2.06714C13.0054 2.06714 14.6654 3.73381 14.6654 5.7938C14.6654 10.4605 10.3454 13.2138 8.41203 13.8738Z" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </SocialIcon>
                    <SocialIcon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66537 12.6673H5.33203C2.66536 12.6673 1.33203 12.0007 1.33203 8.66732V5.33398C1.33203 2.66732 2.66536 1.33398 5.33203 1.33398H10.6654C13.332 1.33398 14.6654 2.66732 14.6654 5.33398V8.66732C14.6654 11.334 13.332 12.6673 10.6654 12.6673H10.332C10.1254 12.6673 9.92537 12.7673 9.7987 12.934L8.7987 14.2673C8.3587 14.854 7.6387 14.854 7.1987 14.2673L6.1987 12.934C6.09203 12.7873 5.84537 12.6673 5.66537 12.6673Z" stroke="#F3F3F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.66797 5.33398H11.3346" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.66797 8.66602H8.66797" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </SocialIcon>
                    <SocialIcon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.38672 3.44019H11.6134C12.7201 3.44019 13.6134 4.33352 13.6134 5.44019V7.65352" stroke="#F3F3F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.49339 1.33276L2.38672 3.43941L4.49339 5.5461" stroke="#F3F3F3" stroke-width="1.14286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.6134 12.5598H4.38672C3.28005 12.5598 2.38672 11.6664 2.38672 10.5598V8.34644" stroke="#F3F3F3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.5078 14.6665L13.6145 12.5598L11.5078 10.4531" stroke="#F3F3F3" stroke-width="1.14286" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </SocialIcon>
                    <SocialIcon>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.58203 6.41712L12.3654 1.63379" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.8312 3.96724V1.16724H10.0312" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.41797 1.16724H5.2513C2.33464 1.16724 1.16797 2.3339 1.16797 5.25057V8.75057C1.16797 11.6672 2.33464 12.8339 5.2513 12.8339H8.7513C11.668 12.8339 12.8346 11.6672 12.8346 8.75057V7.5839" stroke="#F3F3F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </SocialIcon>
                </div>
            </div>
        </div>
    )
}

export default ProfileFeed