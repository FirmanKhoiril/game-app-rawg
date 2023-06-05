import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
