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

db.Miembro = require('../models/members.js')(sequelize, Sequelize);
db.Autor = require('../models/autores.js')(sequelize, Sequelize);    
db.Libro = require('../models/libros.js')(sequelize, Sequelize);     

module.exports = db;
