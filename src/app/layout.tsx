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
      <body className="flex flex-col min-h-screen font-sans bg-white">
          <header className="flex justify-end gap-4 p-4 bg-white shadow-lg">

             <Link
              href='/login'
              className="px-4 py-2 text-orange-500 transition border-2 border-orange-500 rounded-lg hover:bg-orange-50">login
             </Link>
             <Link 
             href='/register'
              className="px-4 py-2 text-orange-500 transition border-2 border-orange-500 rounded-lg hover:bg-orange-50">register
              </Link>
             <Link
              href='/logout'
              
              className="p-2 mt-2 text-white bg-orange-500 rounded-lg btn hover:bg-orange-600">
              logout
             </Link>
           </header>
         <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
