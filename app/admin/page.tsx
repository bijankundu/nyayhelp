import React from "react";
import dynamic from "next/dynamic";

const AddPostEditor = dynamic(
  () => import("@/components/admin/addPostEditor"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <div>
      <AddPostEditor />
    </div>
  );
};

export default Page;
