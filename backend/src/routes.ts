import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { ProfileController } from "./controllers/ProfileController";

export const routes = Router();

/**
 * users routes
 */
routes.post('/users', new UserController().create);
routes.get('/users', new UserController().findAll);
routes.get('/users/:id', new UserController().findById);
routes.patch('/users/:id', new UserController().update);

/**
 * profiles routes
 */
routes.post('/profiles', new ProfileController().create);
routes.patch('/profiles/:id', new ProfileController().update);