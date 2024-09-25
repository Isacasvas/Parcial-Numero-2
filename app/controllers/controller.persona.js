const db = require('../config/db.config.js');
const Persona = db.Persona;

exports.create = (req, res) => {
    let persona = {};

    try {
        persona.nombre = req.body.nombre;
        persona.apellido = req.body.apellido;
        persona.telefono = req.body.telefono;

        Persona.create(persona).then(result => {
            res.status(200).json({
                message: "Persona creada exitosamente con id = " + result.id_persona,
                persona: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear la PERSONA!",
            error: error.message
        });
    }
};

exports.retrieveAllPersonas = (req, res) => {
    Persona.findAll()
        .then(personas => {
            res.status(200).json({
                message: "¡Personas obtenidas exitosamente!",
                personas: personas
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener las personas!",
                error: error
            });
        });
};

exports.getPersonaById = (req, res) => {
    let personaId = req.params.id;
    Persona.findByPk(personaId)
        .then(persona => {
            if (persona) {
                res.status(200).json({
                    message: "Persona obtenida exitosamente con id = " + personaId,
                    persona: persona
                });
            } else {
                res.status(404).json({
                    message: "No se encontró la persona con id = " + personaId
                });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener la persona con id!",
                error: error
            });
        });
};

exports.updateById = async (req, res) => {
    try {
        let personaId = req.params.id;
        let persona = await Persona.findByPk(personaId);

        if (!persona) {
            res.status(404).json({
                message: "No se encontró la Persona para actualizar con id = " + personaId,
                persona: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                telefono: req.body.telefono
            };
            let result = await Persona.update(updatedObject, { returning: true, where: { id_persona: personaId } });

            if (!result) {
                res.status(500).json({
                    message: "No se puede actualizar una persona con id = " + req.params.id,
                    error: "No se pudo actualizar la persona",
                });
            };

            res.status(200).json({
                message: "Actualización exitosa de una Persona con id = " + personaId,
                persona: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar una persona con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        let personaId = req.params.id;
        let persona = await Persona.findByPk(personaId);

        if (!persona) {
            res.status(404).json({
                message: "No existe la persona con id = " + personaId,
                error: "404",
            });
        } else {
            await persona.destroy();
            res.status(200).json({
                message: "Eliminación exitosa de la Persona con id = " + personaId,
                persona: persona,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar una persona con id = " + req.params.id,
            error: error.message,
        });
    }
};
