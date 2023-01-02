import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

export const productRoutes = Router();
export const manufacturerRoutes = Router();
export const productTypeRoutes = Router();

/**
 * create routes
*/
productRoutes.post('/', new ProductController().create);

/**
 * find routes
 */
productRoutes.get('/', new ProductController().findAll);
productRoutes.get('/:id', new ProductController().findById);
manufacturerRoutes.get('/', new ProductController().findManufacturers);
productTypeRoutes.get('/', new ProductController().findProductTypes);

/**
 * update routes
 */
productRoutes.patch('/:id', new ProductController().update);

/**
 * delete routes
 */