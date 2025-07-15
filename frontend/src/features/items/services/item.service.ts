import { getItems as fetchItems } from "../api/getItems";
import type { Item } from "../types";

export const getItems = async (): Promise<Item[]> => {
  const items = await fetchItems();
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};
