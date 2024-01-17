"use client";

import { robotoBold } from "../../../util/constant";

export default function Main() {
  return (
    <div className="w-full">
      <div
        className={`h-[100vh] flex flex-col justify-center items-center text-5xl text-center`}
      >
        <div>
          Simple <span className={`${robotoBold.className}`}>Pagination</span>
        </div>
        <div className="">with TypeScript</div>
      </div>
    </div>
  );
}
