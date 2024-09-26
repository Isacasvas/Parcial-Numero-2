module.exports = (sequelize, Sequelize) => {
    const Proyecto = sequelize.define('proyecto', {
      id_proyecto: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  
    return Proyecto;
  };
  