export const stationAnalytics = {
  
  getMinReading(stationReadings) {
  let readingMin = Math.min(...stationReadings);
    return readingMin;
  },
  
  getMaxReading(stationReadings) {
    let maxReading = Math.max(...stationReadings);
      return maxReading;
    },
  
  
};