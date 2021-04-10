const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM Usuario', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) =>{
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM Usuario WHERE idUsuario = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const { idUsuario, nombre_usuario, apellido_1, apellido_2, domicilio, telefono_fijo, celular, correo, fecha_registro, municipio,
		estado, pais, password, tipousuario, cedula_profesional } = req.body;

    const query = `
        CALL userAdd(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `
    mysqlConnection.query(query, [ idUsuario, nombre_usuario, apellido_1, apellido_2, domicilio, telefono_fijo, celular, correo, fecha_registro, municipio,
		estado, pais, password, tipousuario, cedula_profesional ], (err, rows, fields) => {
            if(!err){
                res.json({Status: 'User Saved Correctly'});
            } else{
                console.log(err);
            }
        })
})

module.exports = router;