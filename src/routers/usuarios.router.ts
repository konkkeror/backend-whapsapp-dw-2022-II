import express, { Request, Response, Router}  from 'express';
import { agregarContacto, obtenerContactos, obtenerConversaciones, obtenerUsuarios } from '../controllers/usuarios.controller';

export const usuariosRouter: Router = express.Router();

usuariosRouter.get('/', (req: Request, res: Response) => {
  obtenerUsuarios(req, res);
});

usuariosRouter.get('/:id/contactos', (req: Request, res: Response) => {obtenerContactos(req, res);});
usuariosRouter.post('/:id/contactos', (req: Request, res: Response) => {agregarContacto(req, res);});
usuariosRouter.get('/:id/conversaciones', (req: Request, res: Response) => {obtenerConversaciones(req, res);});