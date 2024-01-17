"use client";

import { ReactNode, useEffect } from "react";
import { projectTitle } from "../../../util/constant";
import getPagination from "../../../../open-source/esm";

export default function CodeBlock() {
  const data = [
    { name: "hello 1", id: 1 },
    { name: "hello 2", id: 2 },
    { name: "hello 3", id: 3 },
    { name: "hello 4", id: 4 },
    { name: "hello 5", id: 5 },
    { name: "hello 6", id: 6 },
    { name: "hello 7", id: 7 },
    { name: "hello 8", id: 8 },
    { name: "hello 9", id: 9 },
    { name: "hello 10", id: 10 },
    { name: "hello 11", id: 11 },
    { name: "hello 12", id: 12 },
    { name: "hello 13", id: 13 },
    { name: "hello 14", id: 14 },
    { name: "hello 15", id: 15 },
  ];

  useEffect(() => {
    console.log(getPagination(data, 5, 2));
  }, []);

  return (
    <CodeBox className="leading-7 max-tab:overflow-x-scroll">
      <pre>
        <div>
          <span className="text-cyan-300 italic">{`import `}</span>
          <span>{`getPagination `}</span>
          <span className="text-cyan-300 italic">{`from `}</span>
          <span className="text-cyan-300">{`"`}</span>
          <span className="text-lime-400">{projectTitle.toLowerCase()}</span>
          <span className="text-cyan-300">{`"; `}</span>
        </div>
        <div>
          <span className="text-cyan-300 italic">{`export default `}</span>
          <span className="text-purple-400">{`function `}</span>
          <span className="text-blue-400">{`App`}</span>
          <span className="text-yellow-300">{`() {`}</span>
        </div>

        <div>
          <span className="text-purple-300">{`    )`}</span>
          <span className="text-cyan-300">{`;`}</span>
        </div>

        <div>
          <span className="text-yellow-300">{`}`}</span>
        </div>
      </pre>
    </CodeBox>
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
