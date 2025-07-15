import { Router, Request, Response, NextFunction } from "express";
import { ItemService } from "../../service/ItemService";
import { ItemRepositoryImpl } from "../../infrastructure/ItemRepositoryImpl";
import { BadRequestError, NotFoundError } from "../../errors/ApiErrors";

const router = Router();

const repository = new ItemRepositoryImpl();
const service = new ItemService(repository);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await service.listItems();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      throw new BadRequestError("Invalid ID");
    }

    const item = await service.getItem(id);
    if (!item) {
      throw new NotFoundError("Item not found");
    }

    res.json(item);
  } catch (error) {
    next(error);
  }
});

export default router;
