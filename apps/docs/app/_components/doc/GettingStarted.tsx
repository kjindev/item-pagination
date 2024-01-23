import React, { ReactNode } from "react";
import { projectTitle, robotoBold } from "../../../util/constant";
import CodeBlock from "./CodeBlock";

export default function GettingStarted() {
  return (
    <div className="w-full pt-6">
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ What is {projectTitle}?
        </div>

        <div className="text-sm py-3 leading-7">
          {projectTitle} is the function that takes the JavaScript object array
          as an argument and divides them into pages. Use it to easily provide
          Pagination on your project!
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>✅ Installation</div>
        <div className="text-sm py-3 leading-7">
          <span>{projectTitle} is available as a package on npm.</span>
          <CodeBox className="my-3">npm i {projectTitle.toLowerCase()}</CodeBox>
          <span>Or if you are using yarn:</span>
          <CodeBox className="my-3">
            yarn add {projectTitle.toLowerCase()}
          </CodeBox>
          <span>Or if you are using pnpm:</span>
          <CodeBox className="my-3">
            pnpm add {projectTitle.toLowerCase()}
          </CodeBox>
        </div>
      </div>
      <div className="py-3">
        <div className={`${robotoBold.className} text-lg`}>
          ✅ Getting Started
        </div>
        <div className="text-sm py-3 leading-7">
          If you finished to install, then you could import{" "}
          <span className="font-bold">getPagination</span> and{" "}
          <span className="font-bold">getTotalPages</span> in your project.
        </div>
        <CodeBlock />
        <div className="text-sm py-3 leading-7">
          Let's check <span className="font-bold">Quick Start</span> for more
          information that how to use.
        </div>
      </div>
    </div>
  );
}

const CodeBox = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} font-light bg-zinc-800 text-zinc-100 text-sm px-5 py-4 rounded-xl`}
    >
      {children}
    </div>
  );
};
