import { Item } from "../domain/Item";

export interface ItemRepository {
  getAll(): Promise<Item[]>;
  getById(id: number): Promise<Item | null>;
}
