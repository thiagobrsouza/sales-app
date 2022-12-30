import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

const service = new OrderService();

export class OrderController {

  async create(req: Request, res: Response) {
    const { userId, status } = req.body;
    const result = await service.create({ userId, status });
    return res.status(201).json(result);
  }

}