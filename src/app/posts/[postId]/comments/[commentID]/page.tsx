"use client";
import React from "react";
import { notFound } from "next/navigation";

function genRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function Comment({
  params,
}: {
  params: {
    commentID: string;
    postId: string;
  };
}) {
  // const random = genRandomInt(2);
  // console.log(random);
  // if (random === 1) {
  //   throw new Error("Error loading comments");
  // }
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
