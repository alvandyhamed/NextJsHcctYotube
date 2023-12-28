import React from "react";
import { notFound } from "next/navigation";

function Comment({
  params,
}: {
  params: {
    commentID: string;
    postId: string;
  };
}) {
  if (parseInt(params.commentID) > 1000) {
    notFound();
  }
  return (
    <h1>
      comment {params.commentID} for post {params.postId}
    </h1>
  );
}

export default Comment;
