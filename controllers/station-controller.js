import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { readingConversions } from "../utils/reading-conversions.js";


export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const minTempReading = stationAnalytics.getMinTempReading(station);
    const maxTempReading = stationAnalytics.getMaxTempReading(station);
    const latestCodeReading = stationAnalytics.getLatestReading(station);
    const latestTempReading = stationAnalytics.getLatestReading(station);
    const convertLatestTempReading = readingConversions.convertTemp(latestTempReading.temperature);
    const latestWindSpeedReading = stationAnalytics.getLatestReading(station);
    const convertWindSpeedReadingToBFT = readingConversions.convertWindSpeedToBeaufortIndex(latestWindSpeedReading.windSpeed);
    const convertBFTCodeToText = readingConversions.convertBFTCodeToText(convertWindSpeedReadingToBFT);
    const latestPressureReading = stationAnalytics.getLatestReading(station);
  
    
    const viewData = {
      title: "Station",
      station: station,
      minTempReading: minTempReading,
      maxTempReading: maxTempReading,
      latestCodeReading: latestCodeReading,
      latestTempReading: latestTempReading,
      convertLatestTempReading: convertLatestTempReading,
      latestWindSpeedReading: latestWindSpeedReading,
      convertWindSpeedReadingToBFT: convertWindSpeedReadingToBFT,
      convertBFTCodeToText: convertBFTCodeToText,
      latestPressureReading: latestPressureReading,
    };
    response.render("station-view", viewData);
  },
  
  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReading = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
    };
    console.log(`adding reading ${newReading.code}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },
  
  async deleteReading(request, response) {
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    console.log(`Deleting Reading ${readingId} from Station ${stationId}`);
    await readingStore.deleteReading(request.params.readingId);
    response.redirect("/station/" + stationId);
  },
};