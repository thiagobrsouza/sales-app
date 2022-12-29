import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

const service = new ProductService();

export class ProductController {

  async create(req: Request, res: Response) {
    const { name, partNumber, active, productTypeId, manufacturerId } = req.body;
    const result = await service.create({ name, partNumber, active, productTypeId, manufacturerId });
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
    const { name, partNumber, active, productTypeId, manufacturerId } = req.body;
    const result = await service.update(+id, { name, partNumber, active, productTypeId, manufacturerId });
    return res.json(result);
  }

}