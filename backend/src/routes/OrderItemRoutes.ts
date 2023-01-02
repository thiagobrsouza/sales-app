import { Router } from "express";
import { OrderItemController } from "../controllers/OrderItemController";

export const itemsRoutes = Router();

/**
 * add items routes
 */
itemsRoutes.post('/:orderId/items', new OrderItemController().addItemToOrder);

/**
 * remove item from order
 */
itemsRoutes.delete('/:orderId/items/:productId', new OrderItemController().removeItemFromOrder);

/**
 * update items from order
 */
itemsRoutes.patch('/:orderId/items/:productId', new OrderItemController().updateItem);