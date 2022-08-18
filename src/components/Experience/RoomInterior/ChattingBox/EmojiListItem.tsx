type EmojiListItemType = {
  item: any;
};

function setCaretPosition(elemId, caretPos) {
  var elem = document.getElementById(elemId) as HTMLTextAreaElement;

  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move("character", caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else elem.focus();
    }
  }
}
const EmojiListItem = (props: EmojiListItemType) => {
  const feedEmoji = () => {
    let input_comp = document.getElementById(
      "chatting_input"
    ) as HTMLTextAreaElement;
    let origin_val = input_comp.value;
    let current_caret_position_start = input_comp.selectionStart;
    let current_caret_position_end = input_comp.selectionEnd;

    let first_part = origin_val.slice(0, current_caret_position_start);
    let second_part = origin_val.slice(current_caret_position_end);

    input_comp.value = first_part + props.item + second_part;
    input_comp.focus();
    setCaretPosition("chatting_input", current_caret_position_start + 2);
  };

  return (
    <div
      className={` cursor-pointer flex flex-row justify-center items-center bg-transparent hover:bg-[#3f3f43] rounded-[5px] p-[2px] `}
      onClick={() => feedEmoji()}
    >
      <div>{props.item}</div>
    </div>
  );
};

export default EmojiListItem;
