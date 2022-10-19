import Image from "next/image"

type ProfileFeedSharedBadgeProps = {
    srcUrl: string
}

const ProfileFeedSharedBadge = (props: ProfileFeedSharedBadgeProps) => {
    return (
        <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] bg-[#1f1f20] border-[2px] border-globalBgColor ">
            <Image src={props.srcUrl} layout="fixed" width={16} height={12} alt="badge" />
        </div>
    )
}

export default ProfileFeedSharedBadge