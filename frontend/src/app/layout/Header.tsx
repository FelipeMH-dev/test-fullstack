import { useTheme } from "../providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700 dark:text-blue-300">
        Test Frontend
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Cambiar tema"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-300" />
        ) : (
          <Moon className="w-5 h-5 text-gray-800" />
        )}
      </button>
    </header>
  );
};
