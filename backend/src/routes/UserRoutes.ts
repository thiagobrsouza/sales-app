import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const userRoutes = Router();

/**
 * create routes
 */
userRoutes.post('/', new UserController().create);

/**
 * find routes
 */
userRoutes.get('/', new UserController().findAll);
userRoutes.get('/:id', new UserController().findById);

/**
 * update routes
 */
userRoutes.patch('/:id', new UserController().update);
