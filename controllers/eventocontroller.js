import {evento} from '../models/evento.js';

//Registrar un evento en la base de datos mongos

export const regevento = (req,res) => {
    const user1 = evento(req.body);
    user1
        .save()
        .then((data) => res.json (data))
        .catch((error) => res.json({ message: error }));
};

// Mostrar todos los eventos registrados

export const mostrarevento = (req,res) => {
    evento
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
};

//Mostrar la información de un evento especifico

export const unevento = (req, res) => {
    const { id } = req.params;
    evento
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

//Actualizar un evento especifico

export const upevento = (req,res) => {
    const {id} = req.params;
    const { fecha, equipo1, equipo2, marcador1, marcador2, evento} = req.body;
    evento
        .updateOne({ _id: id}, { $set: {fecha, equipo1, equipo2, marcador1, marcador2, evento }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

// Eliminar un evento

export const delevento = (req,res) => {
    const {id} = req.params;
    evento
        .deleteOne({_id: id})
        .then ((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

export default regevento;

