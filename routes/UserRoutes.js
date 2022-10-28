const express = require('express')
const router = express.Router()
const {CrearUser,TraerUserPorId,actualizarUser,EliminarUser,traerUsers} = require('../controllers/UserController')

// //rutas de Usuario
router.route('/')
    .post(CrearUser)

 router.route('/:id')
    .get(TraerUserPorId)
    .put(actualizarUser)
    .delete(EliminarUser)


module.exports = router