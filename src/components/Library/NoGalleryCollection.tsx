import { NoGalleryCollectionIcon } from "components/icons"

type NoGalleryCollectionProps = {
    text : string
}

const NoGalleryCollection = (props : NoGalleryCollectionProps) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center mt-[48px]">
            <div className="flex h-[170px] w-[170px] border-[1.2px] border-[#272829] rounded-[64px] justify-center items-center">
                <NoGalleryCollectionIcon />
            </div>
            <div className="my-[64px] font-500 text-[#929298] text-[20px] text-center">
                {props.text}
            </div>
        </div>
    )
}

export default NoGalleryCollection