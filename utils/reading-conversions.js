import { stationAnalytics } from "../utils/station-analytics.js";
import { stationController } from "../controllers/station-controller.js";


export const readingConversions = {
  
  toOneDecimalPlaces(number){
    const oneDecimalPlace = (number *100 ) /100
        return oneDecimalPlace;
    },
    
  convertTemp(celsius) {
    const fahrenheitTemp =((celsius*9)/5)+32;
    return this.toOneDecimalPlaces(fahrenheitTemp);
  },
  
  convertWindSpeedToBeaufortIndex(windSpeed) {

        if (windSpeed == 1)
        {
            return 0;
        }
        else if ((windSpeed > 1) && (windSpeed <= 5))
        {
            return 1;
        }
        else if ((windSpeed > 5) && (windSpeed <= 11))
        {
            return 2;
        }
        else if ((windSpeed > 11) && (windSpeed <= 19))
        {
            return 3;
        }
        else if ((windSpeed > 19) && (windSpeed <= 28))
        {
            return 4;
        }
        else if ((windSpeed > 28) && (windSpeed <= 38))
        {
            return 5;
        }
        else if ((windSpeed > 38) && (windSpeed <= 49))
        {
            return 6;
        }
        else if ((windSpeed > 49) && (windSpeed <= 61))
        {
            return 7;
        }
        else if ((windSpeed > 61) && (windSpeed <= 74))
        {
            return 8;
        }
        else if ((windSpeed > 74) && (windSpeed <= 88))
        {
            return 9;
        }
        else if ((windSpeed > 88) && (windSpeed <= 102))
        {
            return 10;
        }
        else if ((windSpeed > 102) && (windSpeed <= 117))
        {
            return 11;
        }
        else
        {
            return -1;
        }
    },
  
  convertBFTCodeToText(bftCode) {

        switch (bftCode) {
            case 0:
                return "Calm";
            case 1:
                return "Light Air";
            case 2:
                return "Light Breeze";
            case 3:
                return "Gentle Breeze";
            case 4:
                return "Moderate Breeze";
            case 5:
                return "Fresh Breeze";
            case 6:
                return "Strong Breeze";
            case 7:
                return "Near Gale";
            case 8:
                return "Gale";
            case 9:
                return "Severe Gale";
            case 10:
                return "Strong Storm";
            case 11:
                return "Violent Storm";
            default:
                return "No wind conditions";
        }
    }
  
}

