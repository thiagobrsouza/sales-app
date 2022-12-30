import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

const service = new OrderService();

export class OrderController {

  async create(req: Request, res: Response) {
    const { userId, status } = req.body;
    const result = await service.create({ userId, status });
    return res.status(201).json(result);
  }

  async update(req: Request, res: Response) {
    const { orderId } = req.params;
    const { userId, status, items } = req.body;
    const result = await service.update(+orderId, { userId, status, items });
    return res.json(result);
  }

}