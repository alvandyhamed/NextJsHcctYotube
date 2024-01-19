import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "by ham",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  function genRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }
  const random = genRandomInt(2);
  console.log(random);
  if (random === 1) {
    throw new Error("Error loading comments List");
  }

  return (
    <>
      {children}
      <h2>This is Fix</h2>
    </>
  );
}
