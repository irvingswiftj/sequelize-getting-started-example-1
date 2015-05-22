'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var createStudentsTable = function () {

      return queryInterface.createTable('Students', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: Sequelize.STRING
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      });
    };
    
    return createStudentsTable();
  },

  down: function (queryInterface, Sequelize) {

    var dropStudentsTable = function () {
      return queryInterface.dropTable('Students');
    };
    
    return dropStudentsTable();
  }
};
