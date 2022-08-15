import UName from "./UName";

type TypingNotification = {
  who: Array<string>;
};

const TypingNotification = (props: TypingNotification) => {
  return (
    <div className=" absolute px-[26px] bottom-[0px] font-['Outfit'] font-[400] text-[12px] text-[#929298] " onDragStart={(e) => e.preventDefault()}>
      {props.who.length === 0 ? (
        ""
      ) : props.who.length === 1 ? (
        <div className="flex flex-row gap-[5px]">
          <UName uname={props.who[0]} /> is typing...
        </div>
      ) : props.who.length === 2 ? (
        <div className="flex flex-row gap-[5px]">
          <UName uname={props.who[0]} />
          <div>and</div>
          <UName uname={props.who[1]} /> <div> are typing...</div>
        </div>
      ) : props.who.length > 2 ? (
        <div className="flex flex-row gap-[5px]">
          <UName uname={props.who[0]} /> and other{" "}
          <UName uname={(props.who.length - 1).toString()} /> users are
          typing...
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TypingNotification;
