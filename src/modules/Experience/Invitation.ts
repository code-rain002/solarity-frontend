import { apiCaller } from "utils/fetcher";

export type InvitationPageProps = {
  roomInfo: any;
  success: Boolean;
};

export const getServerSideProps = async (context: any) => {
  const { link } = context.query;

  try {
    const {
      data: { roomInfo },
    } = await apiCaller.get(`/users/getLinkInfo/${link}`);
    return { props: { roomInfo, success: true } };
  } catch (err) {
    return { props: { success: false } };
  }
};
