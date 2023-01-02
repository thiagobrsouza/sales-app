import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

const service = new OrderService();

export class OrderController {

  async create(req: Request, res: Response) {
    const { userId, status } = req.body;
    const result = await service.create({ userId, status });
    return res.status(201).json(result);
  }

  async findAll(req: Request, res: Response) {
    const result = await service.findAll();
    return res.status(201).json(result);
  }

  async findById(req: Request, res: Response) {
    const orderId = parseInt(req.params.orderId);
    const result = await service.findById(orderId);
    return res.status(201).json(result);
  }

  async update(req: Request, res: Response) {
    const orderId = parseInt(req.params.orderId);
    const { userId, status } = req.body;
    const result = await service.update({ orderId, userId, status });
    return res.json(result);
  }

  async deleteOne(req: Request, res: Response) {
    const orderId = parseInt(req.params.orderId);
    const result = await service.deleteOne(orderId);
    return res.json(result);
  }

}