const express = require('express')
const router = express.Router()
const {crearUser,TraerUserPorId,ActualizarUser,EliminarUser} = require('../controllers/UserController')

// //rutas de Usuario
router.route('/')
    .post(crearUser)

 router.route('/:id')
    .get(TraerUserPorId)
    .put(ActualizarUser)
    .delete(EliminarUser)


module.exports = router