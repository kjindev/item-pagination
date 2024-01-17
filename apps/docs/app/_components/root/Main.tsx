"use client";

import Link from "next/link";
import { robotoBold } from "../../../util/constant";

export default function Main() {
  return (
    <div className="w-full">
      <div
        className={`h-[100vh] flex flex-col justify-center items-center text-center`}
      >
        <div className="text-5xl">
          <span>Simple </span>
          <span className={`${robotoBold.className}`}>Pagination</span>
          <div className="">with TypeScript</div>
        </div>
        <Link href="/doc/getting-started">
          <button className="my-7 px-3 py-2 bg-zinc-800 rounded-xl  text-sm hover:bg-cyan-600 text-white transition-colors">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
