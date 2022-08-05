import CreateRoomButton from "components/Experience/CreateRoom/CreateRoomButton"
import LiveRoomList from "components/Experience/CreateRoom/LiveRoomList"


const CreateRoomSection = () => {
    return (
        <div className=" flex flex-col w-[379px]  ">
            <CreateRoomButton />
            <LiveRoomList />
        </div>
    )
}

export default CreateRoomSection