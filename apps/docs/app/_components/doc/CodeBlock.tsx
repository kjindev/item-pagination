import { ReactNode } from "react";

export default function CodeBlock() {
  return (
    <CodeBox className="leading-7">
      <pre>
        <div>
          <span className="text-blue-400">{`getPagination`}</span>
          <span className="text-purple-400">{`(`}</span>
          <span>{`data`}</span>
          <span className="text-cyan-300">{`, `}</span>
          <span className="text-orange-400">6</span>
          <span className="text-cyan-300">{`, `}</span>
          <span className="text-orange-400">1</span>
          <span className="text-purple-400">{`)`}</span>
          <span className="text-cyan-300">{`; `}</span>
        </div>
        <div>
          <span className="text-blue-400">{`getTotalPages`}</span>
          <span className="text-purple-400">{`(`}</span>
          <span>{`data`}</span>
          <span className="text-cyan-300">{`, `}</span>
          <span className="text-orange-400">6</span>
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
