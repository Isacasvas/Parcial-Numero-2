const db = require('../config/db.config.js');
const Usuario = db.Usuario;

exports.create = async (req, res) => {
  try {
    if (!req.body.nombre || !req.body.correo || !req.body.password) {
      return res.status(400).send({
        message: "El contenido no puede estar vacío."
      });
    }

    const usuario = {
      nombre: req.body.nombre,
      correo: req.body.correo,
      password: req.body.password
    };

    const data = await Usuario.create(usuario);
    res.send(data);

  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al crear el Usuario."
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Usuario.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al obtener los Usuarios."
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id_usuario: id }
    });
    if (updated) {
      const updatedUsuario = await Usuario.findByPk(id);
      res.send(updatedUsuario);
    } else {
      res.status(404).send({
        message: `No se pudo encontrar o actualizar el Usuario con id=${id}.`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Error al actualizar el Usuario con id=${id}.`
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Usuario.destroy({
      where: { id_usuario: id }
    });
    if (deleted) {
      res.send({
        message: "El Usuario fue eliminado con éxito."
      });
    } else {
      res.status(404).send({
        message: `No se encontró el Usuario con id=${id}.`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `No se pudo eliminar el Usuario con id=${id}.`
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const deleted = await Usuario.destroy({
      where: {},
      truncate: false
    });
    res.send({ message: `${deleted} Usuarios fueron eliminados con éxito.` });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió un error al eliminar todos los Usuarios."
    });
  }
};
