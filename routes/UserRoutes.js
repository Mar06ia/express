const express = require('express')
const router = express.Router()
const {crearUser,ActualizarUser,EliminarUser, TraerUsuarios,TraerUserPorId} = require('../controllers/UserController')

// //rutas de Usuario
router.route('/')
    .post(crearUser)
    .get(TraerUsuarios)

 router.route('/:id')
    .get(TraerUserPorId)
    .put(ActualizarUser)
    .delete(EliminarUser)


module.exports = router