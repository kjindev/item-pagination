import Link from "next/link";
import React from "react";

export default function SideMenu() {
  const title = "font-bold mt-2";
  const content =
    "pl-2 text-sm my-1 py-1 hover:text-cyan-600 hover:cursor-pointer";
  return (
    <div className="hidden tab:inline-block pt-[60px] w-[270px] h-[100vh] fixed bg-white border-r">
      <div className="px-5 py-4">
        <div className={title}>Introduction</div>
        <Link href="/doc/getting-started">
          <div className={content}>Getting Started</div>
        </Link>
        <div className={title}>Tutorials</div>
        <Link href="/doc/quick-start">
          <div className={content}>Quick Start</div>
        </Link>
        <Link href="/doc/information">
          <div className={content}>Information</div>
        </Link>
      </div>
    </div>
  );
}
