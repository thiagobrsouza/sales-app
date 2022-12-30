import { Request, Response } from "express";
import { OrderItemService } from "../services/OrderItemService";

const service = new OrderItemService();

export class OrderItemController {

  async addItemToOrder(req: Request, res: Response) {
    const { orderId } = req.params;
    const { productId, ammount, price } = req.body;
    const result = await service.addItemToOrder(+orderId, { productId, ammount, price });
    return res.status(201).json(result);
  }

  async removeItemFromOrder(req: Request, res: Response) {
    const { orderId, productId } = req.params;
    res.json(await service.removeItemFromOrder(+orderId, +productId));
  }

}