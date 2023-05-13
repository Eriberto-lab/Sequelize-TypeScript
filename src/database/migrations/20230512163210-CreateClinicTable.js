'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('clinics', { 
      id:{
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
     
      
    });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('clinics');
   
  }
};
