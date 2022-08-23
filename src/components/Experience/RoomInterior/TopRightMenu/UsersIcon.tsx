type UsersIconType = {
  setLeftSideActive: any;
  leftSideActive: string;
  isAndroid: boolean;
  usersBoxActive: boolean;
  setUsersBoxActive: any;
};

const UsersIcon = (props: UsersIconType) => {
  return (
    <div
      className=" cursor-pointer users "
      onClick={() =>
        props.isAndroid
          ? props.leftSideActive === "users"
            ? props.setLeftSideActive("")
            : props.setLeftSideActive("users")
          : props.setUsersBoxActive(!props.usersBoxActive)
      }
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
          stroke={
            props.isAndroid
              ? props.leftSideActive === "users"
                ? "#29b080"
                : "#f3f3f3"
              : props.usersBoxActive
              ? "#29b080"
              : "#f3f3f3"
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4416 16.5C15.4416 13.5975 12.5541 11.25 8.99914 11.25C5.44414 11.25 2.55664 13.5975 2.55664 16.5"
          stroke={
            props.isAndroid
              ? props.leftSideActive === "users"
                ? "#29b080"
                : "#f3f3f3"
              : props.usersBoxActive
              ? "#29b080"
              : "#f3f3f3"
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default UsersIcon;
