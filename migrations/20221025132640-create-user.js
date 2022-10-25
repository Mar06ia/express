'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //up:ejecutar cambios en la db
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      
    });
  },
  //down:revertir cambios
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

//ejecutar migraciones:
