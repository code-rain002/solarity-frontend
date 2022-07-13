import Image from 'next/image'

const WalletBalanceIcon = ({kind, balance, address, badge, onClick}) => {
    return (
        <div className="flex flex-col bg-[#181818] rounded-5 m-[5px] p-4 content-between rounded-[20px] cursor-pointer" onClick={onClick}>
            <div className="flex flex-row justify-start text-[#929298] font-400 custom-2xl:text-[16px] xl:text-[14px] items-center">
                <Image src={badge} width={24} height={24} alt="wallet icon" />
                <div className="ml-[10px]">
                  {address}
                </div>
            </div>

            <div className="flex flex-row mt-[10px]">
              <div className="text-[#f3f3f3] font-500 custom-2xl:text-5 xl:text-4">
                {balance}
              </div>
              <div className="text-[#929298] font-500 custom-2xl:text-5 xl:text-4 ml-[5px]">
                {kind}
              </div>
            </div>
        </div>
    )
}

export default WalletBalanceIcon