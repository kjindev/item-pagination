import React from "react";
import { robotoBold } from "../../../util/constant";
import CodeBlock from "./CodeBlock";

export default function QuickStart() {
  return (
    <div className="pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ How to start?
        </div>
        <div className="text-sm py-3 text-justify">
          <CodeBlock />
          <div className="py-3 leading-7"></div>
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ getPagination
        </div>
        <div className="text-sm py-3 leading-7">
          It's a function to provide Pagination. It has three arguments,{" "}
          <span className="font-bold">data</span>,{" "}
          <span className="font-bold"># of item</span> and{" "}
          <span className="font-bold">currentPage</span>.
          <div className="flex w-full justify-between text-center bg-zinc-200 p-2 rounded-xl my-2 text-xs font-bold">
            <div className="w-[20%]">name</div>
            <div className="w-[40%]">type</div>
            <div className="w-[40%]">description</div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">data</div>
            <div className="w-[40%]">Object Array</div>
            <div className="w-[40%] text-start">The function</div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]"># of item</div>
            <div className="w-[40%]">number</div>
            <div className="w-[40%] text-start"></div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">currentPage</div>
            <div className="w-[40%]">number</div>
            <div className="w-[40%] text-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
