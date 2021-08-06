import { SINCE } from "./Inputs";

export type Developer = {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: SINCE;
  popularRepository: {
    repositoryName?: string;
    description: string;
    url: string;
  };
};
