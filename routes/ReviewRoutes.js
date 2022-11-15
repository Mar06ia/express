const express = require('express')
const router = express.Router()
const{TraerReseñas,TraerReseñaPorId,crearReseña,ActualizarResena, EliminarReseña} = require('../controllers/ReviewController')

//rutas de Reseñas
router.route('/')
      .post(crearReseña)
      .get(TraerReseñas)

router.route('/:id')
     .get(TraerReseñaPorId)
     .put(ActualizarResena)
     .delete(EliminarReseña)

module.exports =router