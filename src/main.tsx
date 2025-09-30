import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        {/* ThemeProvider para gerenciar temas da aplicação Dark/Light */}
        <ThemeProvider defaultTheme="system">
          <App />
        </ThemeProvider>
      </QueryClientProvider>
  </StrictMode>
);
