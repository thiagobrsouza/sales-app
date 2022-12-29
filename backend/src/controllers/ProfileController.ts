import { Request, Response } from "express";
import { ProfileService } from "../services/ProfileService";

const service = new ProfileService();

export class ProfileController {

  async create(req: Request, res: Response) {
    const { name } = req.body;
    const result = await service.create({ name });
    return res.status(201).json(result);
  }

}