import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";

export const customerRoutes = Router();

/**
 * create route
 */
customerRoutes.post('/', new CustomerController().create);

/**
 * find routes
 */
customerRoutes.get('/', new CustomerController().findAll);
customerRoutes.get('/:id', new CustomerController().findById);

/**
 * update route
 */
customerRoutes.patch('/:id', new CustomerController().update);