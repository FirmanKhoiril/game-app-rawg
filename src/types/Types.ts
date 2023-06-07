import React, { SetStateAction } from "react";

export type TContext = {
  page: number;
  dark: boolean;
  setPage: React.Dispatch<SetStateAction<number>>;
  setDark: React.Dispatch<SetStateAction<boolean>>;
};
