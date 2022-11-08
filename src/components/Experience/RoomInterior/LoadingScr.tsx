
import Image from "next/image"
import { useRouter } from "next/router";

const LoadingScr = () => {
  const router = useRouter();
  const { rid } = router.query;

  return (
    <div
      id="loadingScreen"
      className={`fixed top-0 left-0 right-0 bottom-0 z-[100000]`}
    >
      <div className="relative h-full w-full">
        <Image src={`/images/experience/room_images/room_${parseInt(rid ? rid.toString() : "0") + 1}.jpg`} layout="fill" />

        <div className={`relative h-full w-full bg-[rgba(12,12,14,0.7)] backdrop-blur-lg pt-[calc(50vh-104px)] sm:pt-[calc(50vh-165px)] z-10`}>
          <div className="w-[210px] h-[210px] sm:w-[330px] sm:h-[330px] m-auto">
            <div className="text-white items-center flex h-full">
              <div className="text-center m-auto h-full w-full">
                <div className="progress relative h-full w-full">
                  <svg className="circle-loading-bar hidden sm:block w-full h-full">
                    <circle cx="165" cy="165" r="160"></circle>
                    <circle
                      cx="165"
                      cy="165"
                      r="160"
                      style={{ "--percent": 0 }}
                    ></circle>
                  </svg>
                  <svg className="circle-loading-bar block sm:hidden w-full h-full">
                    <circle cx="104" cy="104" r="100"></circle>
                    <circle
                      cx="104"
                      cy="104"
                      r="100"
                      style={{ "--percent": 0 }}
                    ></circle>
                  </svg>
                  <div className="absolute left-[65px] top-[60px] sm:top-[90px] sm:left-[105px]">
                    <h2 className="loading-status text-[40px] sm:text-[70px] font-bold font-['Outfit'] mb-2 sm:mb-5">
                      {0}
                    </h2>
                    <span className="text-xs sm:text-lg">
                      loading models
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScr