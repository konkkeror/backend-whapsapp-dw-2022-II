
import { Request, Response } from "express";
import mongoose from "mongoose";
import conversacion from "../models/conversacion";

export const obtenerMensajes = (req: Request, res: Response) => {
	conversacion
		.find({_id: req.params.id})
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
			res.send(error);
			res.end();
		});
};

export const agregarMensaje = (req: Request, res: Response) => {
	let mensaje:any = {
			_id: new mongoose.Types.ObjectId(),
			emisor: req.body.emisor,
			receptor: req.body.receptor,
			tipo: req.body.tipo,
			hora: new Date(),
	};
	if (req.body.tipo === 'text') {
		mensaje.mensaje = req.body.mensaje;
	} else if (req.body.tipo === 'sticker') {
		mensaje.sticker = req.body.sticker;
	}
	conversacion.updateOne(
		{_id: req.params.id},
		{
			$push: {
				mensajes: mensaje,
			},
		},
		{ new: true }
	).then((result) => {
		res.send(result);
		res.end();
	});
}