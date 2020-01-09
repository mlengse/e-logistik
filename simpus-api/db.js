const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const db = {};

const {
	MYSQL_HOST,
	MYSQL_DB,
	MYSQL_USER,
	MYSQL_PWD
} = process.env

const sequelize =  new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
	host: MYSQL_HOST,
	// operatorsAliases: false,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})

fs.readdirSync(path.join(__dirname, '/models'))
	.filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
	.forEach(file => {
		const model = sequelize.import(path.join(__dirname, '/models', file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;