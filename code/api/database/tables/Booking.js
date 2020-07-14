const Sequelize = require('sequelize');

module.exports = (db, DataTypes) => {
  const Booking = db.define(
    'booking',
    {
      id: {
        type: DataTypes.BIGINT,
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
        type: DataTypes.STRING,
        field: 'full_name',
      },
      carModel: {
        type: DataTypes.STRING,
        field: 'car_model',
      },
      bookingDate: {
        type: DataTypes.STRING,
        field: 'booking_date',
      },
      bookingTime: {
        type: DataTypes.STRING,
        field: 'booking_time',
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdOn: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
      },
      updatedOn: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updated_at',
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
      },
    },
    {
      tableName: 'booking',
      underscored: true,
    }
  );

  return Booking;
};