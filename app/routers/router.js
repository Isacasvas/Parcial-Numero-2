const express = require('express');
const router = express.Router();
const personasController= require('../controllers/controller.persona.js');
const autoresController = require('../controllers/controller.autores.js');


router.post('/autores/create', autoresController.create);
router.get('/autores', autoresController.retrieveAllAutores);
router.get('/autores/:id', autoresController.getAutorById);
router.put('/autores/:id', autoresController.updateById);
router.delete('/autores/:id', autoresController.deleteById);

router.post('/personas/create', personasController.create);
router.get('/personas', personasController.retrieveAllPersonas);
router.get('/personas/:id', personasController.getPersonaById);
router.put('/personas/:id', personasController.updateById);
router.delete('/personas/:id', personasController.deleteById);



module.exports = router;
