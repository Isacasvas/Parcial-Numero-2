module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
      id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha_creacion:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  
    return Usuario;
  };
  