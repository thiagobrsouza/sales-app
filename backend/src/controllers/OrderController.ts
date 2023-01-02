import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

const service = new OrderService();

export class OrderController {

  async create(req: Request, res: Response) {
    const { userId, status, customerId } = req.body;
    const result = await service.create({ userId, status, customerId });
    return res.status(201).json(result);
  }

  async findAll(req: Request, res: Response) {
    const result = await service.findAll();
    return res.status(201).json(result);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await service.findById(+id);
    return res.status(201).json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { userId, status, customerId } = req.body;
    const result = await service.update(+id, { userId, status, customerId });
    return res.json(result);
  }

  async deleteOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await service.deleteOne(+id);
    return res.json(result);
  }

}