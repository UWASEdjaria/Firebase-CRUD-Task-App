import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firebase CRUD Task App",
  description: "A simple task management app using Firebase for CRUD operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link href='/login'>login</Link>
        <Link href='/register'>register</Link>

        {children}
      </body>
    </html>
  );
}
