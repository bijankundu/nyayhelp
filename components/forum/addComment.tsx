"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddComment = () => {
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleShowCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };

  return (
    <>
      {showCommentBox ? (
        <div className="flex flex-col w-full gap-5">
          <Textarea placeholder="Post your comment" className="resize-none" />
          <div className="flex gap-5">
            <Button size={"sm"}>Comment</Button>
            <Button
              size={"sm"}
              variant={"outline"}
              onClick={handleShowCommentBox}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button
          size={"sm"}
          variant={"link"}
          className="p-0 h-auto"
          onClick={handleShowCommentBox}
        >
          Add a comment
        </Button>
      )}
    </>
  );
};

export default AddComment;
