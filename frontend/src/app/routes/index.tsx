import { ItemsPage } from "../../features/items";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../../pages/404"; 
const AppRoutes = () => {
   return (
    <Routes>
      <Route path="/" element={<ItemsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
