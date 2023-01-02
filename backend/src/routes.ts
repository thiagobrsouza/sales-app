import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { ProfileController } from "./controllers/ProfileController";
import { ProductController } from "./controllers/ProductController";
import { OrderController } from "./controllers/OrderController";
import { OrderItemController } from "./controllers/OrderItemController";
import { CustomerController } from "./controllers/CustomerController";

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
routes.get('/profiles', new ProfileController().findAll);
routes.get('/profiles/:id', new ProfileController().findById);
routes.patch('/profiles/:id', new ProfileController().update);
routes.delete('/profiles/:id', new ProfileController().deleteOne);

/**
 * customers routes
 */
routes.post('/customers', new CustomerController().create);
routes.get('/customers', new CustomerController().findAll);
routes.get('/customers/:id', new CustomerController().findById);
routes.patch('/customers/:id', new CustomerController().update);

/**
 * products routes
 */
routes.post('/products', new ProductController().create);
routes.get('/products', new ProductController().findAll);
routes.get('/products/:id', new ProductController().findById);
routes.patch('/products/:id', new ProductController().update);
routes.get('/manufacturers', new ProductController().findManufacturers);
routes.get('/product-types', new ProductController().findProductTypes);

/**
 * orders routes
 */
routes.post('/orders', new OrderController().create);
routes.patch('/orders/:orderId', new OrderController().update);
routes.delete('/orders/:orderId', new OrderController().deleteOne);
routes.get('/orders', new OrderController().findAll);
routes.get('/orders/:orderId', new OrderController().findById);

/**
 * order items routes
 */
routes.post('/orders/:orderId/items', new OrderItemController().addItemToOrder);
routes.delete('/orders/:orderId/items/:productId', new OrderItemController().removeItemFromOrder);
routes.patch('/orders/:orderId/items/:productId', new OrderItemController().updateItem);