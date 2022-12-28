import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const routes = Router();

/**
 * users routes
 */
routes.post('/users', new UserController().create);