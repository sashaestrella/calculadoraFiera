const { Router } = require("express");
const router = Router();
const datosModel = require('../models/datos');

router.get('/obtenerDatos', function (req, res, next) {
    datosModel.obtenerDatos()
        .then(resp => {
            return res.send(resp);
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo los datos");
        });
})

router.post('/agregarDato', function (req, res, next) {
    const { dato } = req.body;

    if (!dato) {
        return res.status(500).send("No hay valores ingresados");
    } 

    datosModel.insertarDato(dato)
        .then(resp => {
            console.log("Se ingresó el dato");
            return res.status(201).send();
        })
        .catch(err => {
            return res.status(500).send("Error insertando el dato");
        });
});

module.exports = router;