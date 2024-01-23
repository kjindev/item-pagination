import { ReactNode } from "react";

export default function CodeBlock2() {
  return (
    <CodeBox className="">
      <pre>
        <div>
          <span className="text-purple-400">{`const `}</span>
          <span className="text-red-400">{`data`}</span>
          <span className="text-cyan-300">{` = `}</span>
          <span className="text-purple-400">{`[`}</span>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <span className="text-blue-400">{`    { `}</span>
            <span>{`name`}</span>
            <span className="text-cyan-300">{`: "`}</span>
            <span className="text-lime-400">{`name ${index}`}</span>
            <span className="text-cyan-300">{`",`}</span>
            <span>{` id`}</span>
            <span className="text-cyan-300">{`: `}</span>
            <span className="text-orange-400">{`${index}`}</span>
            <span className="text-blue-400">{`}`}</span>
            {index !== 9 && <span className="text-cyan-300">{`,`}</span>}
          </div>
        ))}
        <div>
          <span className="text-purple-400">{`]`}</span>
          <span className="text-cyan-300">{`;`}</span>
        </div>

        <div>
          <span> </span>
        </div>

        <div>
          <span>{`console`}</span>
          <span className="text-cyan-300">{`.`}</span>
          <span className="text-blue-400">{`log`}</span>
          <span className="text-purple-400">{`(`}</span>
          <span className="text-blue-400">{`getPagination(`}</span>
          <span>{`data`}</span>
          <span className="text-cyan-300">{`, `}</span>
          <span className="text-orange-400">6</span>
          <span className="text-cyan-300">{`, `}</span>
          <span className="text-orange-400">1</span>
          <span className="text-blue-400">{`)`}</span>
          <span className="text-purple-400">{`)`}</span>
          <span className="text-cyan-300">{`; `}</span>
        </div>
        <div>
          <span>{`console`}</span>
          <span className="text-cyan-300">{`.`}</span>
          <span className="text-blue-400">{`log`}</span>
          <span className="text-purple-400">{`(`}</span>
          <span className="text-blue-400">{`getTotalPages(`}</span>
          <span>{`data`}</span>
          <span className="text-cyan-300">{`, `}</span>
          <span className="text-orange-400">6</span>
          <span className="text-blue-400">{`)`}</span>
          <span className="text-purple-400">{`)`}</span>
          <span className="text-cyan-300">{`; `}</span>
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
