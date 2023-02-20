const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', 'ma897030', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos com secesso!')
} catch (err) {
    console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize