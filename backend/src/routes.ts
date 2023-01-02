import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { ProfileController } from "./controllers/ProfileController";
import { ProductController } from "./controllers/ProductController";
import { OrderController } from "./controllers/OrderController";
import { OrderItemController } from "./controllers/OrderItemController";
import { CustomerController } from "./controllers/CustomerController";
import { check } from "express-validator";
import { body } from "express-validator/src/middlewares/validation-chain-builders";
import { validationResult } from "express-validator/src/validation-result";
import { validate } from "./middlewares/validationExpress";
import { profileRoutes } from "./routes/ProfileRoutes";
import { customerRoutes } from "./routes/CustomerRoutes";
import { manufacturerRoutes, productTypeRoutes } from "./routes/ProductRoutes";
import { userRoutes } from "./routes/UserRoutes";
import { orderRoutes } from "./routes/OrderRoutes";
import { itemsRoutes } from "./routes/OrderItemRoutes";

export const routes = Router();

/**
 * users routes
 */
routes.use('/users', userRoutes);

/**
 * profile routes
 */
routes.use('/profiles', profileRoutes);

/**
 * customers routes
 */
routes.use('/customers', customerRoutes);

/**
 * products routes
 */
routes.use('/products', profileRoutes);
routes.use('/manufacturers', manufacturerRoutes);
routes.use('/product-types', productTypeRoutes);

/**
 * orders routes
 */
routes.use('/orders', orderRoutes);

/**
 * order items routes
 */
routes.use('/orders', itemsRoutes);