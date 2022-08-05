import { FC, Fragment } from "react";
import { Button, CancelButton, PrimaryButton } from "../Buttons";

const ConfirmModal: FC<{
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    subtitle?: string;
  }> = ({ open, onClose, onConfirm, title, subtitle }) => {
    return (
      <>
        {open ? (
          <>
            <div className="justify-center items-center hidden sm:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[120] outline-none focus:outline-none"
              onClick={onClose}
            >
              <div className="relative w-auto my-6 mx-auto max-w-[380px]" onClick={(e) => { e.stopPropagation() }}>
                {/*content*/}
                <div className=" rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#141416] outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between pt-5 pl-8 pr-6 rounded-t">
                    <h3 className="text-[36px] text-white font-medium tracking-[0.02em]">
                      Complete and Mint
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent  text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={onClose}
                    >
                      <span className="bg-transparent text-grey h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-8 flex-auto">
                    {/* <CancelButton onClick={() => {}} styles="rounded-[15px]" />
                    <Button caption="Connect wallet" icon="" bordered={false} onClick={() => {}} /> */}
                    <div className="w-full px-[32px] py-[32px] lg:px-14 lg:py-8 flex-auto flex items-end">
                        <div className="inline-block w-[20%] pr-2">
                        <CancelButton onClick={() => {}} styles="rounded-[15px]" />
                        </div>
                        <div className="inline-block w-[80%] pl-2">
                        <Button caption="Connect wallet" icon="" bordered={false} onClick={() => {}} />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/70 backdrop-blur-sm fixed inset-0 z-[100]"></div>
          </>) : null}
      </>
    );
  };
  
  export default ConfirmModal;