import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import { MainLayout } from "./layout/MainLayout";
import AppRoutes from "./routes";

export const AppRoot = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
};
