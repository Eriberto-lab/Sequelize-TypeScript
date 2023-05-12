'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        // unique: true, atrapalhando no teste
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      clinicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clinics',
          key: 'id'
        },
        allowNull: false,
        field: 'clinic_id'
      }
      
      });
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('users');
    
  }
};
