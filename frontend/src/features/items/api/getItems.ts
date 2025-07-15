import type { Item } from "../types";
import { securityApi } from "./securityApi";

export const getItems = async (): Promise<Item[]> => {
  return await securityApi<Item[]>("/items");
};
