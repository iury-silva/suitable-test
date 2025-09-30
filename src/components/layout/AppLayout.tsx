import { Header, Footer } from "./components";
import type { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="w-full max-w-md mx-auto flex flex-col relative bg-background shadow-lg md:max-w-xl">
        <Header />
        <main className="flex-1 pb-24 bg-gray-900/10 dark:bg-gray-50/5">
          <div className="p-4">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
