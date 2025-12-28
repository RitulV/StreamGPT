import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { ArrowRightIcon, AlertCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

import { ollama } from "@/utils/ollama";

const AiSearch = () => {
  const availableModels = [
    {
      id: "gpt-oss:120b",
      name: "GPT OSS",
    },
    {
      id: "deepseek-v3.2",
      name: "DeepSeek V3.2",
    },
    {
      id: "qwen3-vl:235b",
      name: "Qwen VL",
    },
    {
      id: "gemma3:4b",
      name: "Gemma 3",
    },
  ];

  // var empAvailableModels2 = useGetAvailableModels();

  const searchStr = useRef<HTMLDivElement>(null);
  let model = "";
  const [searchCall, setSearchCall] = useState(false);

  const handlerSearch = async () => {
    setSearchCall(true);
    return;

    var queryString =
      "Answer the user input query: " + searchStr.current?.innerText;

    try {
      const response = await ollama.chat({
        model: "deepseek-v3.1:671b",
        messages: [{ role: "user", content: queryString }],
        stream: true,
      });

      for await (const part of response) {
        console.log(part.message.content);
      }
    } catch (err) {}
  };

  return (
    <div className="flex flex-col justify-center relative items-center px-10 h-[90vh] w-full">
      <form>
        <div className="relative border border-[#fcfcfc14] w-[65vw] min-h-[60px] rounded-full overflow-hidden -top-[10rem]">
          <div
            className="relative max-h-[6.5rem] min-h-7 w-[40rem] mx-14 my-4 break-all focus:outline-none overflow-y-scroll bg-transparent text-shadow-none whitespace-break-spaces text-[#fcfcfc]
        outline-none [&:empty]:before:content-[attr(data-placeholder)] [&:empty]:before:text-gray-400 [&:empty]:before:cursor-text"
            contentEditable="plaintext-only"
            data-placeholder="Search for movies and tv shows"
            suppressContentEditableWarning={true}
            ref={searchStr}
            onBlur={(e) => {
              if (e.currentTarget.textContent?.trim() === "") {
                e.currentTarget.textContent = "";
              }
            }}
          ></div>
          <div className="absolute flex gap-1.5 z-10 bottom-[0.7rem] left-[1rem] pointer-events-none">
            <div className="h-10 w-10 flex justify-center items-center pr-[0.5rem]">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  fill="#fcfcfc14"
                />
                <path
                  d="M15 15L21 21"
                  stroke="#fcfcfc14"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#fcfcfc14"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="flex justify-center gap-[2rem] items-center ml-[40rem] pointer-events-auto">
              <div>
                <Select
                  onValueChange={(mod) => {
                    model = mod;
                  }}
                >
                  <SelectTrigger className="w-[150px] border border-[#fcfcfc14]">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {availableModels.map((model) => (
                        <SelectItem value={model.id}>{model.name}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button
                  size="icon-sm"
                  aria-label="Submit"
                  variant="secondary"
                  onClick={() => {
                    handlerSearch();
                  }}
                >
                  <ArrowRightIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {searchCall && (
        <div>
          <Alert
            variant="destructive"
            className="bg-transparent border border-[#fcfcfc14]"
          >
            <AlertCircleIcon />
            <AlertTitle>Unable to process your query at the moment.</AlertTitle>
            <AlertDescription>
              <p>Please verify your search information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check the availabilty of the selected model</li>
                <li>Ensure internet connectivity</li>
                <li>Verify subscription validity</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default AiSearch;
