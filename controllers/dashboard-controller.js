import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = accountsController.getLoggedInUser(request);
    let sortStations = await stationStore.getStationsByUserId(loggedInUser._id);
    sortStations.sort((a, b) => (a.name > b.name ? 1 : -1));
    const viewData = {
      title: "Station Dashboard",
      stations: sortStations,
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      name: request.body.name,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
      
    };
    console.log(`adding station ${newStation.name}`);
    const station = await stationStore.addStation(newStation);
    console.log("test1");
    response.redirect("/dashboard");
  },

  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
};
