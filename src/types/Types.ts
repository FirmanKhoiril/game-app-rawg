import React, { SetStateAction } from "react";

export type TContext = {
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
};
