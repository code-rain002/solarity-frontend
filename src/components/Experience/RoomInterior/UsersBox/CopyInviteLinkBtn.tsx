type CopyInviteLinkBtnType = {
  onClick: any;
};

const CopyInviteLinkBtn = (props: CopyInviteLinkBtnType) => {
  return (
    <div
      className=" flex justify-center items-center bg-primary  h-[40px] rounded-[12px] px-[16px]
                        font-['Outfit'] font-[500] text-[14px] text-[#f3f3f3] cursor-pointer hover:shadow-[0_0_20px_-5px_#29b080] "
      onClick={props.onClick}
    >
      Copy invite link
    </div>
  );
};

export default CopyInviteLinkBtn;
