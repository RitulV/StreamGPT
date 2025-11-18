export const MovieList = {
  Hero: "hero",
  Card: "card",
} as const;

export type MovieList = (typeof MovieList)[keyof typeof MovieList];
