import { Request, Response } from "express";
import { OrderItemService } from "../services/OrderItemService";

const service = new OrderItemService();

export class OrderItemController {

  async addItemToOrder(req: Request, res: Response) {
    const orderId = parseInt(req.params.orderId);
    const { productId, ammount, price } = req.body;
    const result = await service.addItemToOrder({ orderId, productId, ammount, price });
    return res.status(201).json(result);
  }

  async removeItemFromOrder(req: Request, res: Response) {
    const { orderId, productId } = req.params;
    res.json(await service.removeItemFromOrder(+orderId, +productId));
  }

  async updateItem(req: Request, res: Response) {
    const orderId = parseInt(req.params.orderId);
    const productId = parseInt(req.params.productId);
    const { ammount, price } = req.body;
    const result = await service.updateItem({ orderId, productId, ammount, price });
    return res.json(result);
  }

}