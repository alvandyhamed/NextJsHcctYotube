import { ReactNode } from "react";

export const metadata = {
  title: "Next.js",
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
