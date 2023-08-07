import { stationAnalytics } from "../utils/station-analytics.js";
import { stationController } from "../controllers/station-controller.js";


export const readingConversions = {
  
  convertTemp(celsius) {
    const fahrenheitTemp =((celsius*9)/5)+32;
    return Math.round(fahrenheitTemp);
  },
  
  convertWeatherCodeToText(latestWeatherCode) {

        switch (latestWeatherCode) {
            case 100:
                return "Clear";
            case 200:
                return "Partial Clouds";
            case 300:
                return "Cloudy";
            case 400:
                return "Light Showers";
            case 500:
                return "Heavy Showers";
            case 600:
                return "Rain";
            case 700:
                return "Snow";
            case 800:
                return "Thunder";
            default:
                return "No Code Number";
        }

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
    },
  
  calculateWindChill(latestTemp, latestWindSpeed){
        let windChill = 13.12 +0.6215*(latestTemp)-11.37*Math.pow(latestWindSpeed,0.16)+0.3965*(latestTemp*Math.pow(latestWindSpeed,0.16));
        return Math.round(windChill);
    },
  
   convertWindDirectionToText(windDirection) {

        if (((windDirection >= 0.0) && (windDirection <= 11.25))
            || ((windDirection > 348.75) && (windDirection <= 360.0)))
        {
            return "N";
        }
        else if ((windDirection > 11.25) && (windDirection <= 33.75))
        {
            return "NNE";
        }
        else if ((windDirection > 33.75) && (windDirection <= 56.25))
        {
            return "NE";
        }
        else if ((windDirection > 56.25) && (windDirection <= 78.75))
        {
            return "ENE";
        }
        else if ((windDirection > 78.75) && (windDirection <= 101.25))
        {
            return "E";
        }
        else if ((windDirection > 101.25) && (windDirection <= 123.25))
        {
            return "ESE";
        }
        else if ((windDirection > 123.25) && (windDirection <= 146.25))
        {
            return "SE";
        }
        else if ((windDirection > 146.25) && (windDirection <= 168.75))
        {
            return "SSE";
        }
        else if ((windDirection > 168.75) && (windDirection <= 191.25))
        {
            return "S";
        }
        else if ((windDirection > 191.25) && (windDirection <= 213.75))
        {
            return "SSW";
        }
        else if ((windDirection > 213.75) && (windDirection <= 236.25))
        {
            return "SW";
        }
        else if ((windDirection > 236.25) && (windDirection <= 258.75))
        {
            return "WSW";
        }
        else if ((windDirection > 258.75) && (windDirection <= 281.25))
        {
            return "W";
        }
        else if ((windDirection > 281.25) && (windDirection <= 303.75))
        {
            return "WNW";
        }
        else if ((windDirection > 303.75) && (windDirection <= 326.25))
        {
            return "NW";
        }
        else if ((windDirection > 326.25) && (windDirection <= 348.75))
        {
            return "NNW";
        }
        else
        {
            return "No Wind Direction";
        }

    },
  
}

