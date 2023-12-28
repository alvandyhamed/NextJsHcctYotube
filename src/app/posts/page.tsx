import Link from "next/link";
import React from "react";

function Posts() {
  const PostId = 20;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>
        <Link href="posts/1">Post 1</Link>
      </h1>
      <h1>
        <Link href="posts/2">Post 2</Link>
      </h1>
      <h1>
        <Link href="posts/3" replace>
          Post 3
        </Link>
      </h1>
      <h1>
        <Link href={`posts/${PostId}`}>Post {PostId}</Link>
      </h1>
    </>
  );
}

export default Posts;
