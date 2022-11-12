import {user} from '../models/user.js';

//Registrar un usuario en la base de datos mongos

export const reguser = (req,res) => {
    const user1 = user(req.body);
    user1
        .save()
        .then((data) => res.json (data))
        .catch((error) => res.json({ message: error }));
};

// Mostrar todos los usuarios registrados

export const mosuser = (req,res) => {

    user
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}

//Mostrar la información de un usuario especifico

export const showoneuser = (req, res) => {
    const { id } = req.params;
    user
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
};

//Borrar un usuario

export const deluser = (req,res) => {
    const {id} = req.params;
    user
        .deleteOne({_id: id})
        .then ((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

//Actualizar un usuario

export const updateoneuser = (req,res) => {
    const {id} = req.params;
    const { nomuser, password, correo} = req.body;
    user
        .updateOne({ _id: id}, { $set: {nomuser, password, correo }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

export default reguser;

