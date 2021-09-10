import { useRouter } from "next/router";

export const redirectHomePage = ({ userInfo }) => {
  const router = useRouter();
  const isReady = router.isReady;

  if (!isReady) {
    return <div>Loading...</div>;
  }
  if (!userInfo.access_token) {
    router.push("/");
    return null;
  }
};
