import { useEffect, useState } from "react";
import type { Item } from "../types";
import { getItems } from "../services/item.service";
import { ItemCard } from "./ItemCard";
import { PropagateLoader } from "react-spinners";

export const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getItems()
      .then((data) => setItems(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="max-w-md mx-auto mt-10">
        <div className="rounded-2xl shadow-md p-6 bg-white text-center border border-gray-200  dark:bg-gray-900 dark:text-white dark:border-gray-900">
          <p className="text-gray-500 text-lg font-medium"><PropagateLoader color="#527bc0" size={10} /></p>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="max-w-md mx-auto mt-10">
        <div className="rounded-2xl shadow-md p-6 bg-white text-center border border-red-200  dark:bg-gray-900 dark:text-white dark:border-gray-900">
          <p className="text-red-500 text-lg font-medium">Error: {error}</p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 md:gap-2">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
