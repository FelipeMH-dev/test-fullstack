import type { ReactNode } from "react";
import { Header } from "./Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 ">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};
