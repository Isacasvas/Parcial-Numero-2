const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Proyecto = require('../models/proyectos.js')(sequelize,Sequelize);
db.Usuario = require('../models/usuarios.js')(sequelize, Sequelize);
db.Tarea = require('../models/tareas.js')(sequelize, Sequelize);
  
module.exports = db;
