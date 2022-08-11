const { response } = require("express");



const usuariosGet = (req, res = response) => {

    const { q, nombre = 'no name', id } = req.query;

    res.json({
        msg: 'get API -- controlador',
        q,
        nombre,
        id
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API -- controlador', id
    });
}

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API -- controlador', nombre, edad
    });
} 

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API -- controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}