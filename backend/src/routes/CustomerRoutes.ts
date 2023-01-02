import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";
import { check } from "express-validator";
import { validate } from "../middlewares/validationExpress";

export const customerRoutes = Router();

/**
 * create route
 */
customerRoutes.post('/',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório'),
    check('cnpj').notEmpty().withMessage('CNPJ é obrigatório'),
    check('type').notEmpty().withMessage('Tipo é obrigatório'),
    check('userId').notEmpty().withMessage('Vendedor é obrigatório')
  ],
  validate,
  new CustomerController().create
);

/**
 * find routes
 */
customerRoutes.get('/', new CustomerController().findAll);
customerRoutes.get('/:id', new CustomerController().findById);

/**
 * update route
 */
customerRoutes.patch('/:id',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório'),
    check('cnpj').notEmpty().withMessage('CNPJ é obrigatório'),
    check('type').notEmpty().withMessage('Tipo é obrigatório'),
    check('userId').notEmpty().withMessage('Vendedor é obrigatório')
  ],
  validate,
  new CustomerController().update
);