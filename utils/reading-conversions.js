import { stationAnalytics } from "../utils/station-analytics.js";
import { stationController } from "../controllers/station-controller.js";


export const readingConversions = {
  
  toOneDecimalPlaces(number){
    const oneDecimalPlace = (number *100 ) /100
        return oneDecimalPlace;
    },
    
  convertTemp(celsius) {
    
    const fahrenheitTemp =((celsius*9)/5)+32;
    return fahrenheitTemp;
    
  
  },
  
}

