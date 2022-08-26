type ReplyPartType = {
  newMsgDataState: any;
  setNewMsgDataState: any;
};

const ReplyPart = (props: ReplyPartType) => {
  return (
    <div
      id="reply_part"
      className={` justify-between items-start gap-[12px] bg-[#2C2C2E] ${
        props.newMsgDataState.reply.replying ? "flex" : "hidden"
      } px-[15px] py-[5px] rounded-tl-[13px] rounded-tr-[13px]`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 8.33984H14.9C15.79 8.33984 16.5 9.05982 16.5 9.93982V11.7098"
          stroke="#29b080"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.19 6.66016L7.5 8.34021L9.19 10.0302"
          stroke="#29b080"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 15.661H9.10001C8.21001 15.661 7.5 14.941 7.5 14.061V12.291"
          stroke="#29b080"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.8105 17.3408L16.5005 15.6607L14.8105 13.9707"
          stroke="#29b080"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="flex flex-col font-[400] text-[12px] w-[70%]">
        <div className="flex flex-row text-primary">
          {props.newMsgDataState.reply.replyToWhom}
        </div>
        <div className="flex flex-row text-[#b3b3b7]">
          {props.newMsgDataState.reply.hisMsg}
        </div>
      </div>

      <div
        className="cursor-pointer"
        onClick={() =>
          props.setNewMsgDataState({
            ...props.newMsgDataState,
            reply: { replying: false, replyToWhom: "", hisMsg: "" },
          })
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            fill="#3f3f43"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.16992 14.8299L14.8299 9.16992"
            stroke="#b3b3b7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.8299 14.8299L9.16992 9.16992"
            stroke="#b3b3b7"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ReplyPart;
