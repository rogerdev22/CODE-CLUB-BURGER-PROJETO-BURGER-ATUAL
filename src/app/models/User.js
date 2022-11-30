import Sequelize, { Model } from 'Sequelize'

class User extends Model {
    static init(sequelize) {

        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hasch: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,

            },
            {
                sequelize,
            }
        )
    }
}

export default User
