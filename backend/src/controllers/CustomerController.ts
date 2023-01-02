import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";

const service = new CustomerService();

export class CustomerController {

  async create(req: Request, res: Response) {
    const { name, cnpj, type, sellerId, notes } = req.body;
    const result = await service.create({ name, cnpj, type, sellerId, notes });
    return res.status(201).json(result);
  }

  async findAll(req: Request, res: Response) {
    const result = await service.findAll();
    return res.json(result);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await service.findById(+id);
    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, cnpj, type, sellerId, notes } = req.body;
    const result = await service.update(+id, { name, cnpj, type, sellerId, notes });
    return res.json(result);
  }

}