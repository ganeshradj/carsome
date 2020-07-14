const uuid = require('uuid').v4;
const _ = require('lodash');
const { Booking } = require('../tables');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const booking = await Booking.findAll({ plain: true });
    // checker to run seed only once
    if (_.isEmpty(booking))
      await queryInterface.bulkInsert(
        'booking',
        [
          {
            public_id: '57605591-4fa1-4171-b6b4-12296c7bd98c',
            car_model:'Innova',
            full_name:'Ganesh',
            booking_date: '7/15/2020',
            booking_time:'10:30',
            deleted: false,
          },
          {
            public_id: '0eba8052-1f6a-4606-b534-5eeadc6e4abe',
            car_model:'Myvi',
            full_name:'Kumar',
            booking_date: '7/15/2020',
            booking_time:'14:30',
            deleted: false,
          },
          {
            public_id: '29842c35-3dbf-4c07-8a70-8cf70f37e469',
            car_model:'Bmw',
            full_name:'Max',
            booking_date: '7/15/2020',
            booking_time:'12:30',
            deleted: false,
          }
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('booking', null, {}),
};
