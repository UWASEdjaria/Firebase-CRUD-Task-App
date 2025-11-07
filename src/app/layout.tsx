'user client'
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
      <body className="flex flex-col  bg-white min-h-screen font-sans">
          <header className="bg-white shadow-lg p-4 flex justify-end gap-4">

             <Link
              href='/login'
              className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg transition hover:bg-orange-50">login
             </Link>
             <Link 
             href='/register'
              className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg transition hover:bg-orange-50">register
              </Link>
             <Link
              href='/logout'
              className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2 mt-2">
              logout
             </Link>
           </header>
         <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
