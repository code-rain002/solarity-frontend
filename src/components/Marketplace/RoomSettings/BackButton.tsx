import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  const returnMarketplace = (e) => {
    e.preventDefault();
    router.push("/marketplace");
  };
  return (
    <div
      className=" absolute w-[52px] h-[52px] rounded-[15px] box-border left-[32px] top-[32px] bg-[#131314]
                        border-[1.2px] border-[#272829] overflow-hidden flex
                        justify-center items-center cursor-pointer"
      onClick={(e) => returnMarketplace(e)}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0334 13.28L5.68676 8.9333C5.17342 8.41997 5.17342 7.57997 5.68676 7.06664L10.0334 2.71997"
          stroke="white"
          strokeWidth="1.5"
          stroke-miterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BackButton;
