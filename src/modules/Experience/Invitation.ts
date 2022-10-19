import { apiCaller } from "utils/fetcher";

export type InvitationPageProps = {
  roomInfo: any;
  success: Boolean;
};

export async function getStaticPaths() {
  try {
    const {
      data: { roomIds },
    } = await apiCaller.get(`/users/getRoomIds`);
    const paths = roomIds.map((roomId: string) => ({
      params: { link: roomId }
    }))
    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
  } catch (err) {
    return {
      paths: [],
      fallback: false, // can also be true or 'blocking'
    }
  }
}

export const getStaticProps = async (context: any) => {
  const { link } = context.params;

  try {
    const {
      data: { roomInfo },
    } = await apiCaller.get(`/users/getLinkInfo/${link}`);
    return { props: { roomInfo, success: true } };
  } catch (err) {
    return { props: { success: false } };
  }
};
