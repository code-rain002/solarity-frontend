type CreateRoomButtonType = {
  onClick: any;
};

const CreateRoomButton = (props: CreateRoomButtonType) => {
  return (
    <div
      className=" flex justify-center items-center bg-primary md:w-[124px] xs:w-full h-[52px] rounded-[15px]
                        font-['Outfit'] font-[500] text-[16px] text-[#f3f3f3] cursor-pointer hover:shadow-[0_0_20px_-5px_#29b080] "
      onClick={props.onClick}
    >
      Create Room
    </div>
  );
};

export default CreateRoomButton;
