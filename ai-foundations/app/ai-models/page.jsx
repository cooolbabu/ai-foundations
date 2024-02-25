import Link from "next/link";
import NavBar from "@/components/NavBar";
import { getAIModelNames } from "@/lib/getModelInfo";

function AIModels() {
  const aiModels = getAIModelNames();
  //console.log(aiModels);
  return (
    <>
      <ul className="flex flex-col mt-8">
        <li key={aiModels.title} className="ml-10 flex-row">
          {aiModels}
        </li>
      </ul>
    </>
  );
}

export default AIModels;
