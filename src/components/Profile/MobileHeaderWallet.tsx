import { LeftArrow, RightArrow, TotalBalanceIcon } from "components/icons"
import { WalletBalanceData } from "data/WalletBalanceData"
import WalletBalanceIcon from "./WalletBalanceIcon"


const MobileHeaderWallet = () => {

    const rightScroll = () => {
      document.querySelector(".mobile-description-wallet").scrollLeft += 80;
    };

    const leftScroll = () => {
      document.querySelector(".mobile-description-wallet").scrollLeft -= 80;
    };

    return (
      <div className={`relative w-fit`}>
        <div className={`mobile-description-wallet flex h-30 w-[100vw] border-[#272829] relative cursor-pointer
                          p-[5px] my-[1px] border-y-[1px] xs:overflow-y-hidden xs:overflow-x-visible
                          scroll-smooth`}>
              
              <div className="p-4 flex flex-col lg:justify-end lg:justify-items-end
                            md:justify-center sm:justify-center xs:justify-center"  onClick={() => (alert("coming soon"))}>
                <div className="flex flex-row">
                  <div className="text-[#f3f3f3] font-500
                                  custom-2xl:text-[20px] xl:text-[20px] lg:text-[20px] sm:text-[16px] xs:text-[16px]">
                    871.18
                  </div>
                  <div className="text-[#929298] font-500
                                  custom-2xl:text-[20px] xl:text-[20x] lg:text-[20px] sm:text-[16px] xs:text-[16px] ml-[10px]">
                  USD
                  </div>
                </div>
                <div className="custom-2xl:text-[16px] xl:text-3 lg:text-[20px] sm:text-[16px]
                                font-400 text-[#474749]
                                lg:block md:hidden sm:hidden xs:hidden">
                  Total balance
                </div>
                <div className="absolute top-[-15px]
                                lg:block md:hidden sm:hidden xs:hidden">
                  <TotalBalanceIcon />
                </div>
              </div>
              
              {WalletBalanceData.map((i, index) => {
                return <WalletBalanceIcon key={index} kind={i.kind} balance={i.balance} badge={i.icon_url} address={i.addr} onClick={() => alert("coming soon")} />
              })}
              
              
            </div>
            <div className="absolute right-[0px] text-white top-[3px] lg:hidden md:block">
              <button onClick={rightScroll} className="bg-gradient-to-l from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pl-[25px] pr-[10px] h-[63px]"><RightArrow /></button>
            </div>

            <div className="absolute left-[0px] text-white top-[3px] lg:hidden md:block">
              <button onClick={leftScroll} className="bg-gradient-to-r from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pr-[25px] pl-[10px] h-[63px]"><LeftArrow /></button>
            </div>
          </div>
    )
}


export default MobileHeaderWallet