const express = require('express')
const router = express.Router()
const{crearBootcamp,TraerBootcamps,TraerBootcampPorId,ActualizarBootcamp,EliminarBootcamp} = require ('../controllers/BootcampsController')

//ruta de Courses
router.route('/')
     .post(crearBootcamp)
     .get(TraerBootcamps)

router.route('/:id')
     .get(TraerBootcampPorId)
     .put(ActualizarBootcamp)
     .delete(EliminarBootcamp)
    
module.exports = router