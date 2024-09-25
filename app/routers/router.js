const express = require('express');
const router = express.Router();
const personasController= require('../controllers/controller.persona.js');


router.post('/personas/create', personasController.create);
router.get('/personas', personasController.retrieveAllPersonas);
router.get('/personas/:id', personasController.getPersonaById);
router.put('/personas/:id', personasController.updateById);
router.delete('/personas/:id', personasController.deleteById);



module.exports = router;
