import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const routes = Router();

/**
 * users routes
 */
routes.post('/users', new UserController().create);
routes.get('/users', new UserController().findAll);
routes.get('/users/:id', new UserController().findById);
routes.patch('/users/:id', new UserController().update);