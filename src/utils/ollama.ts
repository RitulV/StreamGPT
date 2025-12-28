import { Ollama } from "ollama";

export const ollama = new Ollama({
  host: "https://ollama.com",
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_OLLAMA_KEY,
  },
});