import {user} from '../models/user.js';

//guardar usuario

export const reguser = (req,res) => {
    const user1 = user(req.body);
    user1
        .save()
        .then((data) => res.json (data))
        .catch((error) => res.json({ message: error }));
};

// Mostrar información de los usuarios

export const mosuser = (req,res) => {

    user
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));
}

//Mostrar un usuario especifico

export const showoneuser = (req, res) => {
    const { id } = req.params;
    user
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
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