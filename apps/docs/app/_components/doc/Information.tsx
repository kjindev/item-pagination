import React from "react";
import { projectTitle, robotoBold } from "../../../util/constant";
import LinkIcon from "../../assets/open_in_new.svg";
import Image from "next/image";

export default function Information() {
  return (
    <div className="pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ What does {projectTitle} support?
        </div>
        <div className="text-sm py-3 leading-7">
          {projectTitle} supports <span className="font-bold">TypeScript</span>.
          You can use it in
          <span className="font-bold">CommonJS</span> and{" "}
          <span className="font-bold">ESModule</span>. So, don't hesitate to add{" "}
          {projectTitle} in your project!
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ Lastest Version
        </div>
        <div className="text-sm py-3 text-justify leading-7">
          The lastest version is{" "}
          <span className="bg-zinc-200 rounded px-1">1.1.0</span>, updated on
          January 23.
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ License</div>
        <div className="text-sm py-3 text-justify leading-7">
          {projectTitle} is MIT Licensed.
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ Link</div>
        <div className="text-sm py-3 text-justify leading-7">
          <a
            href="https://github.com/kjindev/item-pagination"
            target="_blank"
            className="hover:text-cyan-600 flex items-center"
          >
            <Image src={LinkIcon} alt="icon" />
            <span className="ml-1">Github Link</span>
          </a>
          <a
            href="https://www.npmjs.com/package/item-pagination"
            target="_blank"
            className="hover:text-cyan-600 flex items-center"
          >
            <Image src={LinkIcon} alt="icon" />
            <span className="ml-1">NPM Package Link</span>
          </a>
        </div>
      </div>
    </div>
  );
}
