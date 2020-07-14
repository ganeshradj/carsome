const _ = require('lodash');
const { Op } = require('sequelize');
const {
 Booking
} = require('../database/tables');

const initialAttributes = ['bookingDate','bookingTime'];

class SlotService {
  static async GetAll(date) {
        return await Booking.findAll({
          attributes: initialAttributes,
          where:{deleted:false,bookingDate:date}
        });
  }
  static async BookSlot(date,timeslot,fullname,carmodel) {
    return await Booking.create({
      bookingDate:date,
      bookingTime:timeslot,
      fullName:fullname,
      carModel:carmodel
    });
}

}

module.exports = SlotService;
