import { EmojiListItemData } from "data/Experience"
import EmojiListItem from "./EmojiListItem"


type EmojiListType = {
    showEmoji : boolean,
}

const EmojiList = (props : EmojiListType) => {
    return (
        <div className={` ${ props.showEmoji ? "block" : "hidden"} grid grid-cols-6 absolute bottom-[50px]
                        right-[-50px] w-[240px] bg-[#131314] p-[12px] border-[1.5px] border-[#3f3f43] rounded-[12px]
                        select-none `}>
            {
                EmojiListItemData.map((i) => {
                    return <EmojiListItem item={i} />
                })
            }
        </div>
    )
}

export default EmojiList