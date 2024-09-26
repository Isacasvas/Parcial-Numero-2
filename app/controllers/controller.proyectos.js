const db = require('../config/db.config.js');
const Proyecto = db.Proyecto;

exports.create = async (req, res) => {
  try {
    const proyecto = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    };

    const data = await Proyecto.create(proyecto);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al crear el proyecto."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Proyecto.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al obtener los proyectos."
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const [updated] = await Proyecto.update(req.body, {
      where: { id_proyecto: id }
    });
    if (updated) {
      const updatedProyecto = await Proyecto.findByPk(id);
      res.send(updatedProyecto);
    } else {
      res.status(404).send({
        message: `No se pudo encontrar o actualizar el proyecto con id=${id}.`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Error al actualizar el proyecto con id=${id}.`
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Proyecto.destroy({
      where: { id_proyecto: id }
    });
    if (deleted) {
      res.send({
        message: "El proyecto fue eliminado con éxito."
      });
    } else {
      res.status(404).send({
        message: `No se encontró el proyecto con id=${id}.`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `No se pudo eliminar el proyecto con id=${id}.`
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const deleted = await Proyecto.destroy({
      where: {},
      truncate: false
    });
    res.send({ message: `${deleted} proyectos fueron eliminados con éxito.` });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al eliminar todos los proyectos."
    });
  }
};
