// src/pages/404.tsx
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4  dark:bg-gray-800 dark:text-white">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2  dark:text-white">
        Página no encontrada
      </p>
      <p className="text-gray-600 mb-6 text-center  dark:text-white">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
