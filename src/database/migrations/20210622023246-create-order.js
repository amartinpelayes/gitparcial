'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.DECIMAL
      },
      payments_Id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'payments',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      
      
      statesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'states',
          key: 'id'
        }
      },
      shippingsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'shippings',
          key: 'id'
        }
      },
      orderDetailsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'orderDetails',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};