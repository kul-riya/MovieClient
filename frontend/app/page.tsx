"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const moviePosters = [
  "https://image.tmdb.org/t/p/original/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
  "https://image.tmdb.org/t/p/original/aKbe411WyjTZy1OZUVIdNDYVf21.jpg",
  "https://image.tmdb.org/t/p/original/wSILunFEbvw00Ql2aaMHCSZf3cI.jpg",
  "https://image.tmdb.org/t/p/original/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
  "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
  "https://image.tmdb.org/t/p/original/vpK2rp3J5LiC01HoNM0j9DEHQ1T.jpg",
];

const PosterSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex == moviePosters.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full mx-auto mt-8 ">
      <div className="">
        {moviePosters.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-2000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-50"></div>
            {/* TODO Use Image tag here for efficiency and modify transition*/}
            <img
              src={url}
              alt={""}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center w-full max-w-6xl">
        <div className="text-stone-200 text-center sm:text-left text-lg sm:text-xl md:text-2xl font-light mb-4">
          All your movies in one place
        </div>

        <div className="text-white text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Your Personal Movie Universe
          </h1>

          <p className="text-stone-300 max-w-2xl text-lg mb-8">
            Discover, track, and review your favorite films with MyMovies. Build
            your watchlist, share recommendations, and never forget that movie
            someone told you about again.
          </p>
        </div>

        <div className="w-full absolute -z-10 inset-0">
          <PosterSlideshow />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap justify-center">
        <div className="flex gap-[24px] flex-wrap  justify-center mb-8">
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition-colors">
            About Us
          </Link>
          <Link
            href="/faq"
            className="text-gray-400 hover:text-white transition-colors">
            FAQ
          </Link>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <div className="text-gray-500 text-sm text-center">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
      {/* TODO: bounce scroll here */}
    </div>
  );
}
