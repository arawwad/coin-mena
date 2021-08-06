import { LANGUAGE, SINCE } from "./Inputs";

export type Repository = {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: LANGUAGE;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: SINCE;
  builtBy: {
    username: string;
    url: string;
    avatar: string;
  }[];
};
