const SlotService = require('../services/slot-service');
const generateTimeslots = require('../utils/Slots');

class SlotController {

  static async GetAvailableSlot(req, res, next) {
    const {date} = req.body;
    let timeslots = generateTimeslots(30, '10:00', '17:30');
    const SlotData = await SlotService.GetAll(date);
    if (!SlotData) return res.notFound();
    
    SlotData.forEach(slot=>{
      timeslots[slot.bookingTime] = timeslots[slot.bookingTime] + 1;
    })

    res.status(200).send(timeslots);
  }

  static async BookSlot(req, res, next) {
    const {date,timeslot,fullname,carmodel} = req.body;
    const SlotData = await SlotService.BookSlot(date,timeslot,fullname,carmodel);

    if (!SlotData) return res.notFound();

    res.status(200).send(SlotData);
  }

}

module.exports = SlotController;
