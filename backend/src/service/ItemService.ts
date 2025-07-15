import { ItemRepository } from "../repository/ItemRepository";
import { Item } from "../domain/Item";

export class ItemService {
  constructor(private readonly repository: ItemRepository) {}

  async listItems(): Promise<Item[]> {
    return this.repository.getAll();
  }

  async getItem(id: number): Promise<Item | null> {
    return this.repository.getById(id);
  }
}
