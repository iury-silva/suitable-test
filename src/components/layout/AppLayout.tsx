import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="w-full max-w-md mx-auto flex flex-col relative bg-background shadow-lg md:max-w-xl">
        <Header />
        <main className="flex-1 pb-24 bg-gray-900/5 dark:bg-gray-50/5">
          <div className="p-4">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
