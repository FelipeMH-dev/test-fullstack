import { ItemRepository } from "../repository/ItemRepository";
import { Item } from "../domain/Item";
import itemsData from "./data/items.json";

const allowedStatus = ["Activo", "Inactivo", "Pendiente"] as const;

function mapToItem(raw: any): Item {
  return {
    ...raw,
    status: allowedStatus.includes(raw.status) ? raw.status : "Pendiente",
  };
}

export class ItemRepositoryImpl implements ItemRepository {
  async getAll(): Promise<Item[]> {
    return itemsData.map(mapToItem);
  }

  async getById(id: number): Promise<Item | null> {
    const raw = itemsData.find((item) => item.id === id);
    return raw ? mapToItem(raw) : null;
  }
}
