import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <Link href="/posts">Posts</Link>
      <h1>Hello World !</h1>;
    </>
  );
}

export default Home;
