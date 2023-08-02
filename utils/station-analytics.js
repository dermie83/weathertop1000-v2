export const stationAnalytics = {
  getMinTempReading(station) {
    let minTempReading = null;
    if (station.readings.length > 0) {
      minTempReading = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minTempReading.temperature) {
          minTempReading = station.readings[i];
        }
      }
    }
    return minTempReading;
  },
  
  getMaxTempReading(station) {
    let maxTempReading = null;
    if (station.readings.length > 0) {
      maxTempReading = station.readings[0];
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maxTempReading.temperature) {
          maxTempReading = station.readings[i];
        }
      }
    }
    return maxTempReading;
  },
  
  
  getLatestCode(station) {
    let latestCodeReading = null;
    if (station.readings.length > 0) {
      latestCodeReading = station.readings[station.readings.length - 1];
    }
    return latestCodeReading;
  }
  
};