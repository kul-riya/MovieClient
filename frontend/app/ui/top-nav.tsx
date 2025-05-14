"use client";
import Logo from "./logo";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Browse", href: "/browse" },
];

const TopNav = () => {
  const pathname = usePathname();
  return (
    <div className="bg-blue-950 border-b-blue-800">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-row items-center justify-between h-20">
          <div className="flex items-center h-full">
            <div className="mx-2 md:mx-10">
              <Logo />
            </div>
            <div className="hidden md:flex gap-4 md:gap-7">
              {links.map((link) => {
                return (
                  <Link href={link.href} key={link.href}>
                    <p
                      className={clsx(
                        "text-stone-300 text-lg px-3 relative h-full hover:border-stone-300 hover:border-y transition-all duration-200",
                        {
                          "border-stone-300 border-y md:text-2xl":
                            link.href == pathname,
                        }
                      )}>
                      {link.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:block text-stone-300 text-lg">Sign Out</div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
