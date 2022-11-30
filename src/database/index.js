
const { Sequelize } = require("sequelize")

const { User }  = require( '../app/models/User' )

const { configDatabase } = require( '../config/database')

const models = [User]

class database {
    constructor() {
        this.init()
    }
    init () {
        this.connection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.connection))
    }
}

export default new database()