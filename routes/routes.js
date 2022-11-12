import express from "express";
import mongoose from "mongoose";
import { reguser, mosuser, showoneuser, updateoneuser, deluser } from "../controllers/usecontrollers.js";
import { regevento, mostrarevento, unevento, upevento, delevento } from "../controllers/eventocontroller.js";
import {db} from '../bdmongo.js';

export const router = express.Router();

//Rutas de registro de usuarios

router.post("/suser", reguser);
router.get('/muser', mosuser);
router.get('/muser/:id', showoneuser);
router.put('/updateuser/:id', updateoneuser);
router.delete('/buser/:id', deluser);

// Rutas de registro de eventos deportivos

router.post('/regevento', regevento);
router.get('/mevento', mostrarevento);
router.get('/mevento/:id', unevento);
router.put('/upevento/:id', upevento);
router.delete('/delevento/:id', delevento);


/*router.get('/', function (req,res){
    res.send('🚀Hola desde la raiz🚀')
})

router.get('/login', function (req,res){
    res.send('Hola desde login')
})

router.post('/agregar', function (req,res){
    res.send('Mensaje Añadido')
    console.log(req.body)
    //let user = new user()
    user1.nameuser = req.body.nameuser
    user1.password = req.body.password
    user1.correo = req.body.correo
    user1.save((err,usersave)=> {
        if (err) res.status(500).send({message: 'error al salvar en la bd: ${err}'})
        res.status(200).send({user: usersave})
    })


})*/



export default router;