import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

export const orderRoutes = Router();

/**
 * create route
 */
orderRoutes.post('/', new OrderController().create);

/**
 * find routes
 */
orderRoutes.get('/', new OrderController().findAll);
orderRoutes.get('/:id', new OrderController().findById);

/**
 * update route
 */
orderRoutes.patch('/:id', new OrderController().update);

/**
 * delete route
 */
orderRoutes.delete('/:id', new OrderController().deleteOne);