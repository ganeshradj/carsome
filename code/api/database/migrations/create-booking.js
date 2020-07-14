module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable(
        'booking',
        {
            id: {
              type: Sequelize.DataTypes.BIGINT,
              primaryKey: true,
              autoIncrement: true,
              unique: true,
            },
            publicId: {
              type: Sequelize.UUID,
              unique: false,
              field: 'public_id',
            },
            fullName: {
              type: Sequelize.DataTypes.STRING,
              field: 'full_name',
            },
            carModel: {
              type: Sequelize.DataTypes.STRING,
              field: 'car_model',
            },
            bookingDate: {
              type: Sequelize.DataTypes.STRING,
              field: 'booking_date',
            },
            bookingTime: {
              type: Sequelize.DataTypes.STRING,
              field: 'booking_time',
            },
            deleted: {
              type: Sequelize.DataTypes.BOOLEAN,
              defaultValue: false,
            },
            createdOn: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
              field: 'created_at',
            },
            createdBy: {
              type: Sequelize.DataTypes.UUID,
              field: 'created_by',
            },
            updatedOn: {
              type: Sequelize.DataTypes.DATE,
              allowNull: true,
              field: 'updated_at',
            },
            updatedBy: {
              type: Sequelize.DataTypes.UUID,
              field: 'updated_by',
            },
          },
          {
            tableName: 'booking',
            underscored: true,
          }
      );
      return queryInterface.addIndex('booking', ['public_id']);
    },
  
    down: (queryInterface, Sequelize) => queryInterface.dropTable('booking'),
  };
  