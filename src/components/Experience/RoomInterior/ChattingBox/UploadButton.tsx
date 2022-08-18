

type UploadButtonType = {
    onClick : any,
}

const UploadButton = (props : UploadButtonType) => {
    return (
        <div className="flex cursor-pointer" onClick={props.onClick}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6668 6.66671V10C14.6668 13.3334 13.3335 14.6667 10.0002 14.6667H6.00016C2.66683 14.6667 1.3335 13.3334 1.3335 10V6.00004C1.3335 2.66671 2.66683 1.33337 6.00016 1.33337H9.3335"
              stroke="#929298"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.6668 6.66671H12.0002C10.0002 6.66671 9.3335 6.00004 9.3335 4.00004V1.33337L14.6668 6.66671Z"
              stroke="#929298"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
    )
}


export default UploadButton