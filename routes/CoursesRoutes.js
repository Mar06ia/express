const express = require('express')
const router = express.Router()
const{TraerCursos,TraerCursosPorId,crearCursos,ActualizarCursos,EliminarCursos} = require ('../controllers/CoursesController')

//ruta de Courses
router.route('/')
     .post(crearCursos)
     .get(TraerCursos)

router.route('/:id')
     .get(TraerCursosPorId)
     .put(ActualizarCursos)
     .delete(EliminarCursos)


module.exports = router