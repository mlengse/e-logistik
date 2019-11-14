require('dotenv').config()

const {
    MYSQL_HOST,
    MYSQL_DB,
    MYSQL_USER,
    MYSQL_PWD
} = process.env

const Sequelize = require('sequelize')
const sequelize =  new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    operatorsAliases: false,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Drugs = sequelize.import(__dirname+'/models/drugs.js')

;(async() => {
    try {
        let drugs = await Drugs.findAll()
        drugs.map( ({ dataValues }) => {
            dataValues = Object.entries(dataValues).reduce((a,[k,v]) => (v == null ? a : {...a, [k]:v}), {})
            console.log(dataValues)
        })
        // console.log(drugs)
        // await sequelize.authenticate()
        // console.log('connect')
    } catch(e) {
        console.error(e)
    }
})()