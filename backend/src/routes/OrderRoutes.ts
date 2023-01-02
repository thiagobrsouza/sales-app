import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { check } from "express-validator";
import { validate } from "../middlewares/validationExpress";

export const orderRoutes = Router();

/**
 * create route
 */
orderRoutes.post('/',
  [
    check('userId').notEmpty().withMessage('Vendedor é obrigatório'),
    check('customerId').notEmpty().withMessage('Cliente é obrigatório'),
    check('status').notEmpty().withMessage('Status da venda é obrigatório')
  ],
  validate,
  new OrderController().create
);

/**
 * find routes
 */
orderRoutes.get('/', new OrderController().findAll);
orderRoutes.get('/:id', new OrderController().findById);

/**
 * update route
 */
orderRoutes.patch('/:id',
  [
    check('userId').notEmpty().withMessage('Vendedor é obrigatório'),
    check('customerId').notEmpty().withMessage('Cliente é obrigatório'),
    check('status').notEmpty().withMessage('Status da venda é obrigatório')
  ],
  validate,
  new OrderController().update
);

/**
 * delete route
 */
orderRoutes.delete('/:id', new OrderController().deleteOne);