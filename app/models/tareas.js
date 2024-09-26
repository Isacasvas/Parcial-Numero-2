module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define('tarea', {
      id_tarea: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      fecha_vencimiento: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  
    return Tarea;
  };
  