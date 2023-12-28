import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    postId: string;
  };
};

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`PostId ${params.postId}`);
//     }, 100);
//   });
//   return {
//     title: `PostId${title}`,
//   };
// };
export const metadata: Metadata = {
  title: {
    absolute: "Post1",
  },
};

function Post({ params }: Props) {
  return <div>Post number {params.postId}</div>;
}

export default Post;
