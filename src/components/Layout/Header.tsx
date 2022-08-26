import React, {useState} from 'react'
import { useRouter } from 'next/router'
import HeaderMenuItem from '../Common/Layout/HeaderMenuItem'
import { HeaderMenuTitles } from 'data/HeaderMenu'
import SearchBox from 'components/Common/Forms/SearchBox'
import BalanceBox from 'components/Common/Forms/HeaderBalanceBox'
import UserInfoMenu from 'components/Common/Forms/UserInfoMenu'
import LibraryLayout from 'components/LibraryLayout'
import { CloseIcon } from 'components/icons'
import Library from 'modules/Library'
import GameDetail from 'modules/Library/GameDetail'
import { Rnd } from 'react-rnd'

interface HeaderProps {
    searchString: string;
    setSearchString: any;
}

const Header = (props: HeaderProps) => {

    const [balanceBoxToggle, setBalanceBoxToggle] = useState(false)

    const [userInfoToggle, setUserInfoToggle] = useState(false)
    const [gameLibraryToggle, setGameLibraryToggle] = useState(false);
    const [gameLibraryPageFlag, setGameLibraryPageFlag] = useState(0);
    const [isIframe, setIsIframe] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);

    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    const defaultStatus = {
        width: innerHeight * 85 / 100 * 16 / 9,
        height: innerHeight * 85 / 100,
        x: (innerWidth - (innerHeight * 85 / 100 * 16 / 9)) / 2,
        y: innerHeight * (100 - 85) / 100 / 2
    };
    const [status, setStatus] = useState(defaultStatus);
    const enabledResizing = {
        bottom: false,
        bottomLeft: true,
        bottomRight: true,
        left: false,
        right: false,
        top: false,
        topLeft: true,
        topRight: true,
    }

    const { asPath } = useRouter()
    const pathSegments = asPath.split("/")
    const currentPath = pathSegments[pathSegments.length - 1]

    const [active, setActive] = useState(currentPath)

    const item_arr = HeaderMenuTitles.map(function (i){
        return <HeaderMenuItem key={i} title={i} active={active === i.toLowerCase()} onClick={i === "Library" ? () => setGameLibraryToggle(true) : () => setActive(i.toLowerCase())} setToggle={setGameLibraryToggle} />
    })

    const onClose = () => {
        setGameLibraryToggle(false);
        setIsIframe(false);
        setStatus(defaultStatus)
    }

    return (
        <>
            <div className="sm:flex xs:hidden
                            custom-2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col
                            justify-between
                            custom-2xl:h-[92px] xl:h-[92px] lg:h-[184px] md:h-[220px] sm:h-[220px] xs:h-[220px]
                            w-full">
                <div className="flex flex-row h-full
                                lg:justify-between md:justify-around sm:justify-between xs:justify-between">
                    {item_arr}
                </div>
                <div className='flex
                                custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col
                                h-full self-center justify-between 
                                custom-2xl:w-fit xl:w-fit lg:w-full md:w-full sm:w-full xs:'>
                    <SearchBox searchString={props.searchString} setSearchString={props.setSearchString} />
                    <div className="flex flex-row
                                    md:justify-end sm:justify-end
                                    md:my-[20px] sm:my-[20px]">
                        <BalanceBox openState={balanceBoxToggle} onEnter={() => setBalanceBoxToggle(true)} onLeave={() => setBalanceBoxToggle(false)} />
                        <UserInfoMenu openState={userInfoToggle} onEnter={() => setUserInfoToggle(true)} onLeave={() => setUserInfoToggle(false)} />
                    </div>
                </div>
            </div>
            {
                gameLibraryToggle ?
                <div className='fixed left-0 top-0 right-0 bottom-0 bg-[rgba(12,12,14,0.7)] flex items-center justify-center z-[1001]'>
                    {/* <Draggable
                     handle=".handle"
                    >
                        <div className={`modal-content w-[85vw] h-[80vh] flex flex-col relative bg-globalBgColor border-[1px] border-[#1d1f1f] rounded-[25px] resize select-none ${isIframe ? '' : 'px-[10px] pb-[10px] pt-[30px]'}`}>
                            <div className='handle cursor-move absolute top-0 left-0 w-full h-[30px] z-[10000]'></div>
                            {
                                isIframe ?
                                    <div className='w-full h-full overflow-hidden rounded-[25px]'>
                                        <iframe frameborder="0" src="https://solarity-frontend.vercel.app/oraziogrinzosih/hub/" featurepolicy="{&quot;vr&quot;: [&quot;*&quot;]}" allow="camera;microphone;vr;" allowfullscreen="true" scrolling="no" width="100%" height="100%"></iframe>
                                    </div>
                                :
                                <LibraryLayout>
                                    {
                                        gameLibraryPageFlag === 0 ?
                                        <Library setPage={setGameLibraryPageFlag} />
                                        :
                                        <GameDetail setPage={setGameLibraryPageFlag} setIframe={setIsIframe} />
                                    }
                                </LibraryLayout>
                            }
                            <div className="absolute top-[-27px] right-[-20px] cursor-pointer" onClick={onClose}>
                                <CloseIcon />
                            </div>
                        </div>
                    </Draggable> */}
                    
                    <Rnd
                        className='transition-none'
                        size={{ width: status.width,  height: status.height }}
                        position={{ x: status.x, y: status.y }}
                        onDragStop={(e, d) => { setStatus({ ...status, x: d.x, y: d.y }) }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                            setStatus({
                            width: Number(ref.style.width),
                            height: Number(ref.style.height),
                            ...position,
                            });
                        }}
                        lockAspectRatio={16/9}
                        minHeight={'281'}
                        maxHeight={'90vh'}
                        minWidth={'500'}
                        maxWidth={'90vw'}
                        dragHandleClassName={`${isIframe ? '' : 'handleDraggling'}`}
                        enableResizing={enabledResizing}
                        >
                        <div className={`modal-content w-[100%] h-[100%] flex flex-col relative bg-globalBgColor border-[1px] border-[#1d1f1f] rounded-[25px] resize select-none ${isIframe ? '' : 'px-[10px] pb-[10px] pt-[30px]'}`}>
                            <div className={`${isIframe ? '' : 'handleDraggling'} m-auto right-0 h-[30px] w-[95%] absolute top-0 left-0 z-[10000] rounded-[50px] overflow-hidden cursor-move`}></div>
                            {
                                isIframe ?
                                    <div className='w-full h-full overflow-hidden rounded-[25px]'>
                                        <iframe frameborder="0" src={selectedGame.iframe} featurepolicy="{&quot;vr&quot;: [&quot;*&quot;]}" allow="camera;microphone;vr;" allowfullscreen="true" scrolling="no" width="100%" height="100%"></iframe>
                                    </div>
                                :
                                <LibraryLayout>
                                    {
                                        gameLibraryPageFlag === 0 ?
                                        <Library setPage={setGameLibraryPageFlag} selectGame={setSelectedGame} />
                                        :
                                        <GameDetail setPage={setGameLibraryPageFlag} setIframe={setIsIframe} selectedGame={selectedGame} />
                                    }
                                </LibraryLayout>
                            }
                            <div className="absolute top-[-27px] right-[-20px] cursor-pointer" onClick={onClose}>
                                <CloseIcon />
                            </div>
                        </div>
                    </Rnd>
                </div>
                : null
            }
            
        </>
    )
}

export default Header