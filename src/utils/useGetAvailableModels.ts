import { useEffect, useState } from "react";
import { type ModelResponse } from "ollama";

interface ListResponse {
  models: ModelResponse[];
}

const useGetAvailableModels = (): ModelResponse[] => {
  const [modelList, setModelList] = useState<ModelResponse[]>([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await fetch("https://ollama.com/api/tags");
        const data: ListResponse = await res.json();

        setModelList(data.models);
      } catch (err) {
        console.error("Failed to fetch available models", err);
      }
    };

    fetchModels();
  }, []);

  return modelList;
};

export default useGetAvailableModels;
