import { useEffect, useState } from "react";
import { getItems } from "../services/item.service";
import type { Item } from "../types";

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItems().then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, []);

  return { items, loading };
}
