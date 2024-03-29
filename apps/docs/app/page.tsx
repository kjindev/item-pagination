import getPagination from "../../open-source/cjs";
import { projectTitle } from "../util/constant";
import Main from "./_components/root/Main";

export default function Page() {
  return (
    <div>
      <Main />
      <footer className="bg-zinc-800 text-zinc-100 h-[200px] flex justify-center items-center">
        {projectTitle}
      </footer>
    </div>
  );
}
