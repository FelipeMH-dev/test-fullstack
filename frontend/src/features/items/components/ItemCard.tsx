import type { Item } from "../types";

interface Props {
  item: Item;
}

export const ItemCard = ({ item }: Props) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col sm:flex-row sm:justify-between sm:items-center w-full dark:bg-gray-900 dark:text-white">
      <div>
        <p className="text-sm text-gray-500  dark:text-white">ID: {item.id}</p>
        <p className="text-lg font-semibold  dark:text-white">{item.fullName}</p>
        <p className="text-sm text-gray-600  dark:text-white">
          {item.country} · {item.agentType}
        </p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500  dark:text-white">{item.date}</p>
        <p className="text-xl font-bold ">
          <span className="text-green-600">$</span>
          <span className="text-blue-500  dark:text-blue-300">{item.amount.toLocaleString()}</span>
        </p>
        <span
          className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
            item.status === "Activo"
              ? "bg-green-100 text-green-700"
              : item.status === "Inactivo"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {item.status}
        </span>
      </div>
    </div>
  );
};
