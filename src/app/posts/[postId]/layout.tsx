import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "by ham",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <h2>This is Fix</h2>
    </>
  );
}
