const db = require('../config/db.config.js');
const Tarea = db.Tarea;

exports.create = async (req, res) => {
  try {
    const tarea = {
      nombre: req.body.nombre,
      estado: req.body.estado,
      fecha_vencimiento: req.body.fecha_vencimiento
    };

    const data = await Tarea.create(tarea);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al crear la tarea."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Tarea.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al obtener las tareas."
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const [updated] = await Tarea.update(req.body, {
      where: { id_tarea: id }
    });
    if (updated) {
      const updatedTarea = await Tarea.findByPk(id);
      res.send(updatedTarea);
    } else {
      res.status(404).send({
        message: `No se pudo encontrar o actualizar la tarea con id=${id}.`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Error al actualizar la tarea con id=${id}.`
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Tarea.destroy({
      where: { id_tarea: id }
    });
    if (deleted) {
      res.send({
        message: "La tarea fue eliminada con éxito."
      });
    } else {
      res.status(404).send({
        message: `No se encontró la tarea con id=${id}.`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `No se pudo eliminar la tarea con id=${id}.`
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const deleted = await Tarea.destroy({
      where: {},
      truncate: false
    });
    res.send({ message: `${deleted} tareas fueron eliminadas con éxito.` });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al eliminar todas las tareas."
    });
  }
};
