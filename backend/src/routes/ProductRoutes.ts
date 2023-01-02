import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import { check } from "express-validator";
import { validate } from "../middlewares/validationExpress";

export const productRoutes = Router();
export const manufacturerRoutes = Router();
export const productTypeRoutes = Router();

/**
 * create routes
*/
productRoutes.post('/',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório'),
    check('partNumber').notEmpty().withMessage('Part number é obrigatório'),
    check('productTypeId').notEmpty().withMessage('Tipo é obrigatório'),
    check('manufacturerId').notEmpty().withMessage('Fabricante é obrigatório')
  ],
  validate,
  new ProductController().create
);

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
productRoutes.patch('/:id',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório'),
    check('partNumber').notEmpty().withMessage('Part number é obrigatório'),
    check('productTypeId').notEmpty().withMessage('Tipo é obrigatório'),
    check('manufacturerId').notEmpty().withMessage('Fabricante é obrigatório')
  ],
  validate,
  new ProductController().update
);

/**
 * delete routes
 */