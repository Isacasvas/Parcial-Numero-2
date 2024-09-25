module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define('persona', {
      id_persona: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Persona;
  };
  