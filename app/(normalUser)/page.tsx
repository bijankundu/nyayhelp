import Landing from "@/components/home/landing";
import JoinDiscussionBanner from "@/components/home/joinDiscussionBanner";
import RecentBlogs from "@/components/home/recentBlogs";
import LatestForumDiscussion from "@/components/home/latestForumDiscussion";

const Page = () => {
  return (
    <>
      <Landing />
      <RecentBlogs />
      <LatestForumDiscussion />
      <JoinDiscussionBanner />
    </>
  );
};

export default Page;
