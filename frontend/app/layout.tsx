import { inter } from "@/app/fonts";
import "@/app/globals.css";
import TopNav from "./ui/top-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col">
          <TopNav />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
