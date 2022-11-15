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

export async function getStaticPaths() {
  try {
    // const {
    //   data: { roomIds },
    // } = await apiCaller.get(`/users`);
    // const paths = roomIds.map((roomId: string) => ({
    //   params: { link: roomId }
    // }))
    return {
      paths: [],
      fallback: true, // can also be true or 'blocking'
    }
  } catch (err) {
    return {
      paths: [],
      fallback: true, // can also be true or 'blocking'
    }
  }
}


export const getStaticProps = async (context: any) => {
  const { username } = context.params;
  try {
    const {
      data: { user },
    } = await apiCaller.get(`/users/${username}`);
    return { props: { user, success: true } };
  } catch (err) {
    return { props: { success: false } };
  }
};
