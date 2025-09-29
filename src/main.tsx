import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system">
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
