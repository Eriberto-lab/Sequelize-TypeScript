'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('clinic_pet', {
       clinicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clinics',
          key: 'id'
        },
        allowNull: false,
       },
       petId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'pets',
          key: 'id'
        },
        allowNull: false,
       }
       });
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('clinic_pet');
    
  }
};
