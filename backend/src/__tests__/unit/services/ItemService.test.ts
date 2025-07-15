import { ItemService } from "../../../service/ItemService";
import { ItemRepository } from "../../../repository/ItemRepository";
import { Item } from "../../../domain/Item";

const mockItems: Item[] = [
  {
    id: 1,
    date: "2025-07-13",
    fullName: "Felipe Mansilla",
    amount: 1500,
    country: "Chile",
    agentType: "Agente A",
    status: "Activo",
  },
];

class MockItemRepository implements ItemRepository {
  getAll(): Promise<Item[]> {
    return Promise.resolve(mockItems);
  }
  getById(id: number): Promise<Item | null> {
    const item = mockItems.find((i) => i.id === id);
    return Promise.resolve(item ?? null);
  }
}

describe("ItemService", () => {
  const repo = new MockItemRepository();
  const service = new ItemService(repo);

  test("listItems debe devolver todos los ítems", async () => {
    const items = await service.listItems();
    expect(items).toEqual(mockItems);
  });

  test("getItem debe devolver un ítem por id", async () => {
    const item = await service.getItem(1);
    expect(item).toEqual(mockItems[0]);
  });

  test("getItem debe devolver null si no existe el ítem", async () => {
    const item = await service.getItem(999);
    expect(item).toBeNull();
  });
});
