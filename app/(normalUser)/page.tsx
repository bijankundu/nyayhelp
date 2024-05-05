import Landing from "@/components/home/landing";
import JoinDiscussionBanner from "@/components/home/joinDiscussionBanner";
import RecentBlogs from "@/components/home/recentBlogs";
import LatestForumDiscussion from "@/components/home/latestForumDiscussion";

import { checkIsAuthenticated } from "@/helpers";

const Page = () => {
  const { isAuthenticated } = checkIsAuthenticated();

  return (
    <>
      <Landing />
      <RecentBlogs />
      <LatestForumDiscussion />
      {!isAuthenticated && <JoinDiscussionBanner />}
    </>
  );
};

export default Page;
