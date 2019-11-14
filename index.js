require('dotenv').config()

const {
    HOST
} = process.env

const Sequelize = require('sequelize')
const sequelize =  new Sequelize('simpus', 'root', 'pkm', {
    host: HOST,
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