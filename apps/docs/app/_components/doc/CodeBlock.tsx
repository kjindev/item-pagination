import { ReactNode } from "react";

export default function CodeBlock() {
  // const data = [
  //   { name: "name 1", id: 1 },
  //   { name: "name 2", id: 2 },
  //   { name: "name 3", id: 3 },
  //   { name: "name 4", id: 4 },
  //   { name: "name 5", id: 5 },
  //   { name: "name 6", id: 6 },
  //   { name: "name 7", id: 7 },
  //   { name: "name 8", id: 8 },
  //   { name: "name 9", id: 9 },
  //   { name: "name 10", id: 10 },
  //   { name: "name 11", id: 11 },
  //   { name: "name 12", id: 12 },
  //   { name: "name 13", id: 13 },
  //   { name: "name 14", id: 14 },
  //   { name: "name 15", id: 15 },
  // ];

  // useEffect(() => {
  //   console.log(getPagination(data, 5, 2));
  // }, []);

  return (
    <CodeBox className="">
      <pre>
        <span className="text-blue-400">{`getPagination`}</span>
        <span className="text-purple-400">{`(`}</span>
        <span>{`data`}</span>
        <span className="text-cyan-300">{`, `}</span>
        <span className="text-orange-400">6</span>
        <span className="text-cyan-300">{`, `}</span>
        <span className="text-orange-400">2</span>
        <span className="text-purple-400">{`)`}</span>
        <span className="text-cyan-300">{`; `}</span>
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
