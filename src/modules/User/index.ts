import { apiCaller } from "utils/fetcher";

export type UserPageProps = {
  user?: UserType;
  success: Boolean;
};

export type UserType = {
  profileImageLink: string;
  username: string;
  solanaAddress: string;
  ethereumAddress: string;
};

export const getServerSideProps = async (context: any) => {
  const { username } = context.query;
  try {
    const {
      data: { user },
    } = await apiCaller.get(`/users/${username}`);
    return { props: { user, success: true } };
  } catch (err) {
    return { props: { success: false } };
  }
};
