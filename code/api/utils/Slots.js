function convert24ToInt(time) {
    const [hours, minutes] = time.split(':');
    return (hours * 100) + (minutes * 100.0 / 60)
  }
  
  function convertIntTo24(time) {
    function leftPad(n) {
      return (n < 10) ? ('0' + n) : n;
    }
  
    const hours = parseInt(time / 100, 10);
    const minutes = (time % 100) * 60 / 100;
    return `${leftPad(hours)}:${leftPad(minutes)}`;
  }
  
  function genRange(start, stop, step) {
    let output = {};
    output[convertIntTo24(start)] = 0;
    let tmp = start;
  
    while (tmp < stop) {
      tmp += step;
      output[convertIntTo24(tmp)] = 0;
    }
  
    return output;
  }
  
  function generateTimeslots(timeInterval, startTime, endTime) {
    if (timeInterval === 0 || timeInterval % 15 !== 0) {
      console.log("Error: Can only accept 15, 30, 60");
      return ;
    }
    
    const intStartTime = convert24ToInt(startTime);
    const intEndTime = convert24ToInt(endTime);
    const intStep = timeInterval * 100 / 60;
    return genRange(intStartTime, intEndTime, intStep);
  }
  
  module.exports = generateTimeslots;
