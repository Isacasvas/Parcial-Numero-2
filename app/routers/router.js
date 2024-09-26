const express = require('express');
const router = express.Router();
const usuariosController= require('../controllers/controller.usuario.js');
const tareaController= require('../controllers/controller.tareas.js');
const proyectoController = require('../controllers/controller.proyectos.js');


router.post('/usuarios/create', usuariosController.create);
router.get('/usuarios', usuariosController.findAll);
router.put('/usuarios/:id', usuariosController.update);
router.delete('/usuarios/:id', usuariosController.delete);
router.delete('/usuarios', usuariosController.deleteAll);


router.post('/tareas/create', tareaController.create);
router.get('/tareas', tareaController.findAll);
router.put('/tareas/:id', tareaController.update);
router.delete('/tareas/:id', tareaController.delete);
router.delete('/tareas', tareaController.deleteAll);


router.post('/proyectos/create', proyectoController.create);
router.get('/proyectos', proyectoController.findAll);
router.put('/proyectos/:id', proyectoController.update);
router.delete('/proyectos/:id', proyectoController.delete);
router.delete('/proyectos', proyectoController.deleteAll);


module.exports = router;
