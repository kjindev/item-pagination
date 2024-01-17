import React from "react";
import { robotoBold } from "../../../util/constant";
import CodeBlock from "./CodeBlock";
import CodeBlock2 from "./CodeBlock2";

export default function QuickStart() {
  return (
    <div className="pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ How to start?
        </div>
        <div className="text-sm py-3">
          <CodeBlock />
          <div className="py-3 leading-7">
            It is {`getPagination(data, itemsPerPage, currentPage)`}. It creates
            a new key-value, <span className="font-bold">page: index</span> in
            the object.
          </div>
          <div className="flex w-full justify-between text-center bg-zinc-200 p-2 rounded-xl my-2 text-xs font-bold">
            <div className="w-[20%]">name</div>
            <div className="w-[40%]">type</div>
            <div className="w-[40%]">description</div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">data</div>
            <div className="w-[40%]">Object Array</div>
            <div className="w-[40%]">Data list.</div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">itemsPerPage</div>
            <div className="w-[40%]">number</div>
            <div className="w-[40%]">Item count per page.</div>
          </div>
          <div className="flex w-full justify-between items-center text-center bg-zinc-100 p-2 rounded-xl my-2 text-xs">
            <div className="w-[20%]">currentPage</div>
            <div className="w-[40%]">number</div>
            <div className="w-[40%]">What page are you currently on.</div>
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ Example</div>
        <div className="text-sm py-3 text-justify">
          <CodeBlock2 />
          <div className="py-3 leading-7">
            Follow the example and check the results!
          </div>
        </div>
      </div>
    </div>
  );
}
