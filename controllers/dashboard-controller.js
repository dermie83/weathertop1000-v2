import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { readingConversions } from "../utils/reading-conversions.js";
import { stationController } from "../controllers/station-controller.js";
import { latestReadings } from "../utils/latest-readings.js";
import { accountsController } from "../controllers/accounts-controller.js";

export const dashboardController = {
  
  async index(request, response) {
    let loggedInUser = await accountsController.getLoggedInUser(request);
    
    
     const viewData = {
      title: "Station Dashboard",
      //stations: stations,
      stations: await stationStore.getStationsByUserId(loggedInUser._id),
    };
    
    for (const station of viewData.stations) {
      const readingObject = await latestReadings(station._id);
      Object.assign(station, readingObject.reading);
    }
      
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
  async addStation(request, response) {
    let loggedInUser = await accountsController.getLoggedInUser(request);
    let newStation = {
      name: request.body.name,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
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
