import { ItemList } from "@features/items/components/ItemList";

export const ItemsPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold mb-6 text-center text-blue-900 dark:text-blue-300">
        Listado de Ítems
      </h2>
      <ItemList />
    </div>
  );
};
