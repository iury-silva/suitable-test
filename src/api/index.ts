const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const setup = async <TResponse>(
  endpoint: string,
  options?: RequestInit
): Promise<TResponse> => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.statusText}`);
  }

  return res.json();
};

export const api = {
  get: <TResponse>(endpoint: string) => setup<TResponse>(endpoint),
};
