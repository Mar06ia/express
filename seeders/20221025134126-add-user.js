'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [
      {
       name: 'John Doe',
       email: 'jhon@misena.edu.co',
       password: '1234'
      },
      {
      name: 'Maria',
      email: 'maria@misena.edu.co',
      password: '3625'
      },
      {
        name: 'Maria',
        email: 'maria@misena.edu.co',
        password: '3625'
      },
  

      //npx sequelize db:seed:all

    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});
  }
};
