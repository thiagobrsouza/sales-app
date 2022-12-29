import { Request, Response } from "express";
import { ProfileService } from "../services/ProfileService";

const service = new ProfileService();

export class ProfileController {

  async create(req: Request, res: Response) {
    const { name, permissions } = req.body;
    const result = await service.create({ name, permissions });
    return res.status(201).json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, permissionsToAdd, permissionsToRemove } = req.body;
    const result = await service.update(+id, { name, permissionsToAdd, permissionsToRemove });
    return res.status(201).json(result);
  }

}