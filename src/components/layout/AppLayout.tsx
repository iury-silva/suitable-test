import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="w-full max-w-md mx-auto flex flex-col min-h-screen relative bg-background shadow-lg md:max-w-xl">
        <Header />
        <main className="flex-1 p-4 pb-24 overflow-y-auto bg-gray-900/5 dark:bg-gray-50/5">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
