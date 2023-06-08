import React, { SetStateAction } from "react";

export type TContext = {
  page: number;
  dark: boolean;
  searchTerm: string;
  setPage: React.Dispatch<SetStateAction<number>>;
  setDark: React.Dispatch<SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
};
