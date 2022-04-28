import { Request, Response } from "express";
import usuario from "../models/usuario";
import mongoose from "mongoose";

export const obtenerUsuarios = (req: Request, res: Response) => {
	usuario
		.find({}, { _id: true, nombre: true, imagen: true })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
			res.send(error);
			res.end();
		});
};

export const obtenerContactos = (req: Request, res: Response) => {
    usuario.aggregate([
		{
			"$lookup": {
				from: "usuarios",
				localField: "contactos",
				foreignField: "_id",
				as: "resultadoContactos"
			}
		},
		{
			"$match": {
				_id: new mongoose.Types.ObjectId(req.params.id)
			}
		},
    {
        "$project": {
            "resultadoContactos._id": true,
            "resultadoContactos.nombre": true,
            "resultadoContactos.imagen": true,
        }
    }]).then((result) => {
        res.send(result[0]?.resultadoContactos);
        res.end();
    }).catch((error) => {});
}

export const agregarContacto = (req: Request, res: Response) => {
	usuario.updateOne(
		{_id: req.params.id},
		{
			$push: {
				contactos: new mongoose.Types.ObjectId(req.body.idContacto),
			},
		},
		{ new: true }
	).then((result) => {
		res.send(result);
		res.end();
	});
}

export const obtenerConversaciones = (req: Request, res: Response) => {
	usuario
		.find({_id: req.params.id}, { conversaciones:true })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => {
			res.send(error);
			res.end();
		});
}
