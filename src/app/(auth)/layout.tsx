"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot", href: "/forgot" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={isActive ? "font-extrabold mr-5" : "text-blue-300 mr-5"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      <h1>Additional heading !</h1>
      {children}
    </>
  );
}
