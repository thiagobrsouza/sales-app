import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { check } from "express-validator";
import { validate } from "../middlewares/validationExpress";

export const userRoutes = Router();

/**
 * create routes
 */
userRoutes.post('/',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório'),
    check('email').notEmpty().isEmail().withMessage('E-mail é obrigatório'),
    check('password').notEmpty().isStrongPassword().withMessage('Senha é obrigatória e deve ser forte'),
    check('profileId').notEmpty().withMessage('Perfil é obrigatório')
  ],
  validate,
  new UserController().create
);

/**
 * find routes
 */
userRoutes.get('/', new UserController().findAll);
userRoutes.get('/:id', new UserController().findById);

/**
 * update routes
 */
userRoutes.patch('/:id',
  [
    check('name').notEmpty().withMessage('Nome é obrigatório'),
    check('email').notEmpty().isEmail().withMessage('E-mail é obrigatório'),
    check('profileId').notEmpty().withMessage('Perfil é obrigatório')
  ],
  validate,
  new UserController().update
);
