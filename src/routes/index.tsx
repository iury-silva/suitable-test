import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import AppLayout from '@/components/layout/AppLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
