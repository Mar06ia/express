const express = require('express')
const router = express.Router()
const{TraerReseñas,TraerReseñaPorId,crearReseña,ActualizarReseña, EliminarReseña} = require('../controllers/ReviewController')

//rutas de Reseñas
router.route('/')
    .post(crearReseña)
    .get(TraerReseñas)

router.route('/:id')
    .get(TraerReseñaPorId)
    .put(ActualizarReseña)
    .delete(EliminarReseña)

module. exports =router