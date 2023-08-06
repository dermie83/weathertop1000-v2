import { readingStore } from "../models/reading-store.js";
import { readingConversions } from "../utils/reading-conversions.js";
import { stationAnalytics } from "../utils/station-analytics.js";


export const latestReadings = async (id) => {
  let stationReadings = await readingStore.getReadingsByStationId(id);
  let latestReading = null;
  const reading = {
    latestCode: null,
    latestCodeLabel: null,
    latestCodeIcon: null,
    latestTemp: null,
    latestTempFahrenheit: null,
    minTemp: null,
    maxTemp: null,
    latestWindSpeed: null,
    latestWindSpeedBFT: null,
    BFTCodeToText: null,
    windSpeedLabel: null,
    minWindSpeed: null,
    maxWindSpeed: null,
    windDirection: null,
    windDirectionLabel: null,
    windDirectionIcon: null,
    WindChill: null,
    latestPressure: null,
    minPressure: null,
    maxPressure: null,
    trendTemperature: null,
    trendWindSpeed: null,
    trendPressure: null,
    readingsRecorded: 0,
  };
  if (stationReadings.length > 0) {
    latestReading = stationReadings.length - 1;
    reading.latestCode = stationReadings[latestReading].code;
    // reading.latestCodeLabel = readingConversions.codeLabel(reading.latestCode);
    // reading.latestCodeIcon = readingConversions.codeIcon(reading.latestCode);
    reading.latestTemp = stationReadings[latestReading].temperature;
    reading.latestTempFahrenheit = readingConversions.convertTemp(reading.latestTemp);
    reading.minTemp = stationAnalytics.getMinTempReading(stationReadings);
    reading.maxTemp = stationAnalytics.getMaxTempReading(stationReadings);
    reading.latestWindSpeed = stationReadings[latestReading].windSpeed;
    reading.latestWindSpeedBFT = readingConversions.convertWindSpeedToBeaufortIndex(reading.latestWindSpeed);
    reading.BFTCodeToText = readingConversions.convertBFTCodeToText(reading.latestWindSpeedBFT)
    reading.minWindSpeed = stationAnalytics.getMinTempReading(stationReadings);
    reading.maxWindSpeed = stationAnalytics.getMinTempReading(stationReadings);
    // reading.windDirection = stationReadings[latestReading].windDirection;
    // reading.windDirectionLabel = readingConversions.convertDegreeToDirection( );
     
    // reading.windDirectionIcon = readingConversions.convertDegreeToDirection( );
     
    // reading.WindChill = readingConversions.calculateWindChill(reading.latestTemp, reading.latestWindSpeed);
    reading.latestPressure = stationReadings[latestReading].pressure;
    reading.minPressure = stationAnalytics.getMinTempReading(stationReadings);
    reading.maxPressure = stationAnalytics.getMinTempReading(stationReadings);
      
//     reading.trendTemperature = stationAnalytics.readingTrends( );
      
//     reading.trendWindSpeed = stationAnalytics.readingTrends( );
      
//     reading.trendPressure = stationAnalytics.readingTrends( );
    
  }
  return {
    latestReading: latestReading,
    reading: reading,
  };
};