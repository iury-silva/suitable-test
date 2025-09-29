import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Company } from "../types/company";

interface CompanyState {
  company: Company | null;
  setCompany: (company: Company) => void;
  clearCompany: () => void;
}

export const useCompanyStore = create<CompanyState>()(
  persist(
    (set) => ({
      company: null,
      setCompany: (company) => set({ company }),
      clearCompany: () => set({ company: null }),
    }),
    {
      name: "company-storage",
    }
  )
);
