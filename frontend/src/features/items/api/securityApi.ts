// src/api/secureFetch.ts
const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const CUSTOM_HEADER = import.meta.env.VITE_CUSTOM_HEADER;

interface SecurityApiOptions extends RequestInit {
  body?: any;
}

const getErrorMessage = (status: number): string => {
  if (status === 401 || status === 403) {
    return "No tienes permiso para realizar esta acción.";
  }

  if (status === 404) {
    return "Recurso no encontrado.";
  }

  if (status >= 500) {
    return "Ocurrió un error en el servidor. Intenta nuevamente más tarde.";
  }

  return "Error inesperado al procesar la solicitud.";
};

export const securityApi = async <T>(
  endpoint: string,
  options: SecurityApiOptions = {},
): Promise<T> => {
  const { method = "GET", body, headers = {}, ...rest } = options;
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
      "X-Custom-Header": CUSTOM_HEADER,
      ...headers,
    },
    body: method === "POST" && body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  if (!response.ok) {
    const message = getErrorMessage(response.status);
    throw new Error(`${response.status} ${message}`);
  }
  return response.json();
};
