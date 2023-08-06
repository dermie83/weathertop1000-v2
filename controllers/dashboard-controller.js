import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { readingConversions } from "../utils/reading-conversions.js";
import { stationController } from "../controllers/station-controller.js";
import { latestReadings } from "../utils/latest-readings.js";

export const dashboardController = {
  
  async index(request, response) {
    const stations = await stationStore.getAllStations();
    
     const viewData = {
      title: "Station Dashboard",
      stations: stations,
    };
    
    for (const station of viewData.stations) {
      const readingObject = await latestReadings(station._id);
      Object.assign(station, readingObject.reading);
    }
      
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
  async addStation(request, response) {
    const newStation = {
      name: request.body.name,
    };
    console.log(`adding station ${newStation.name}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },
  
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
  
};
