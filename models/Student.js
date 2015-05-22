module.exports = function (sequelize, DataTypes) {

    var Student = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'Students',
        hooks: {
            beforeCreate: function (game, options, fn) {
                game.createdAt = new Date();
                game.updatedAt = new Date();
                fn(null, game);
            },
            beforeUpdate: function (game, options, fn) {
                game.updatedAt = new Date();
                fn(null, game);
            }
        }
    });

    return Student;
};
