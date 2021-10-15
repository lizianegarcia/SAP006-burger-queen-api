'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    module.exports = {
      up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
          name: 'John',
          email: 'example@example.com',
          password: 'banana',
          role:'atendente',
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
      },
      down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
      }
    };
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
