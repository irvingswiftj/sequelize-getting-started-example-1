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
            beforeCreate: function (row, options, fn) {
                row.createdAt = new Date();
                row.updatedAt = new Date();
                fn(null, row);
            },
            beforeUpdate: function (row, options, fn) {
                row.updatedAt = new Date();
                fn(null, row);
            }
        }
    });

    return Student;
};
