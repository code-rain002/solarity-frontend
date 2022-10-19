import Image from "next/image"

const GameMorePanel = () => {
    return (
        <div className="flex flex-col relative justify-center items-center overflow-hidden cursor-pointer
                        w-[258px] h-[255px] rounded-[20px] border-[1.2px] border-[#272829] hover:border-primary transition duration-500">

            <div className="h-[100px] w-[100px] z-[1000]">
                <Image src="/images/profile/temp/more_daos_icon.png" layout="responsive" width={100} height={100} />
            </div>
            <div className="z-[1000] font-500 text-[24px] text-[#29b080] pt-[15px]" >
                More Games
            </div>

        </div>
    )
}

export default GameMorePanel