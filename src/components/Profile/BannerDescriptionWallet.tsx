import { LeftArrow, RightArrow, TotalBalanceIcon } from "components/icons"
import { WalletBalanceData } from "data/WalletBalanceData"
import WalletBalanceIcon from "./WalletBalanceIcon"


const BannerDescriptionWallet = ({ sidebarToggler }) => {

  const rightScroll = () => {
    document.querySelector(".banner-description-wallet").scrollLeft += 80;
  };

  const leftScroll = () => {
    document.querySelector(".banner-description-wallet").scrollLeft -= 80;
  };

  return (
    <div className={`relative w-fit`}>
      <div className={`banner-description-wallet flex h-30 lg:w-fit ${sidebarToggler ? "md:w-[64vw] sm:w-[58vw]" : "md:w-[80vw] sm:w-[77vw]"} xs:w-[87vw] border-[#272829] relative cursor-pointer
                          lg:p-[10px] md:p-[5px] sm:p-[5px] xs:p-[5px]
                          custom-2xl:my-0 xl:my-0 lg:my-[30px] md:my-[30px] sm:my-[30px] xs:my-[30px]
                          lg:border-[1px] md:border-x-[0px] md:border-y-[1px] sm:border-x-[0px] sm:border-y-[1px] xs:border-x-[0px] xs:border-y-[1px]
                          lg:rounded-[25px] md:rounded-[0px] sm:rounded-[0px] xs:rounded-[0px]
                          justify-between lg:overflow-y-visible lg:overflow-x-visible
                          md:overflow-y-hidden md:overflow-x-visible sm:overflow-y-hidden sm:overflow-x-visible xs:overflow-y-hidden xs:overflow-x-visible
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
<<<<<<< HEAD
            <TotalBalanceIcon />
=======
                  <TotalBalanceIcon />
                </div>
              </div>
              
              {WalletBalanceData.map((i, j) => {
                return <WalletBalanceIcon kind={i.kind} balance={i.balance} badge={i.icon_url} address={i.addr} onClick={() => alert("coming soon")} key={j} />
              })}
              
              
            </div>
            <div className="absolute right-[-3px] text-white top-[33px] lg:hidden md:block">
              <button onClick={rightScroll} className="bg-gradient-to-l from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pl-[35px] xs:h-[63px] sm:h-[73px]"><RightArrow /></button>
            </div>

            <div className="absolute left-[-3px] text-white top-[33px] lg:hidden md:block">
              <button onClick={leftScroll} className="bg-gradient-to-r from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pr-[35px] xs:h-[63px] sm:h-[73px]"><LeftArrow /></button>
            </div>
>>>>>>> f75706c668e13150b449e490bbff6e70f6f898ff
          </div>
        </div>

        {WalletBalanceData.map((i, index) => {
          return <WalletBalanceIcon kind={i.kind} key={index} balance={i.balance} badge={i.icon_url} address={i.addr} onClick={() => alert("coming soon")} />
        })}


      </div>
      <div className="absolute right-[-3px] text-white top-[33px] lg:hidden md:block">
        <button onClick={rightScroll} className="bg-gradient-to-l from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pl-[35px] xs:h-[63px] sm:h-[73px]"><RightArrow /></button>
      </div>

      <div className="absolute left-[-3px] text-white top-[33px] lg:hidden md:block">
        <button onClick={leftScroll} className="bg-gradient-to-r from-[rgba(19,19,20,1)] via-[rgba(19,19,20,0.8)] to-[rgba(19,19,20,0)] pr-[35px] xs:h-[63px] sm:h-[73px]"><LeftArrow /></button>
      </div>
    </div>
  )
}


export default BannerDescriptionWallet