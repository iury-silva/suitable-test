import { useContext } from "react";
import { ThemeProviderContext } from "../contexts/ThemeContext";

// Hook para acessar o tema atual e a função para alternar temas
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
