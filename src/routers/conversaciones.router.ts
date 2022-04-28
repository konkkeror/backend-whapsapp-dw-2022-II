import express, { Request, Response, Router}  from 'express';
import { agregarMensaje, obtenerMensajes } from '../controllers/coversaciones.controller';

export const conversacionesRouter: Router = express.Router();

conversacionesRouter.get('/:id/mensajes', (req: Request, res: Response) => {
  obtenerMensajes(req, res);
});

conversacionesRouter.post('/:id/mensajes', (req: Request, res: Response) => {
  agregarMensaje(req, res);
});