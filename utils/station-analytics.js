export const stationAnalytics = {
  getMinTempReading(stationReadings) {
  let readingMin = Math.min(stationReadings);
    return readingMin;
  },
  
  
  getMaxTempReading(stationReadings) {
    let readingMax = Math.max(stationReadings);
    return readingMax;
  },
  
  
//   getLatestReading(station) {
//     let latestReading = null;
//     if (station.readings.length > 0) {
//       return latestReading = station.readings[station.readings.length - 1];
//     }
//     return 0;
//   },
  
  
};