import { Router } from "express";
import { ProfileController } from "../controllers/ProfileController";
import { validate } from "../middlewares/validationExpress";
import { check } from "express-validator";

export const profileRoutes = Router();

/**
 * create route
 */
profileRoutes.post('/',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório')
  ],
  validate,
  new ProfileController().create
);

/**
 * find routes
 */
profileRoutes.get('/', new ProfileController().findAll);
profileRoutes.get('/:id', new ProfileController().findById);

/**
 * update route
 */
profileRoutes.patch('/:id',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório')
  ],
  validate,
  new ProfileController().update
);

/**
 * delete route
 */
profileRoutes.delete('/:id', new ProfileController().deleteOne);