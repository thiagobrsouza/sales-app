import { Router } from "express";
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