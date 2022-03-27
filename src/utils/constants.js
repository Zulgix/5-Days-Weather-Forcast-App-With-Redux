import sunny from "../assets/images/weather-icons/sunny.png";
import mostlySunny from "../assets/images/weather-icons/mostlySunny.png";
import partlySunny from "../assets/images/weather-icons/partlySunny.png";
import intermittentCloudsDay from "../assets/images/weather-icons/intermittentCloudsDay.png";
import hazySunshine from "../assets/images/weather-icons/hazySunshine.png";
import mostlyCloudyDay from "../assets/images/weather-icons/mostlyCloudyDay.png";
import cloudy from "../assets/images/weather-icons/cloudy.png";
import dreary from "../assets/images/weather-icons/dreary.png";
import fog from "../assets/images/weather-icons/fog.png";
import showers from "../assets/images/weather-icons/showers.png";
import mostlyCloudWShowers from "../assets/images/weather-icons/mostlyCloudWShowers.png";
import partlySunnyWShowers from "../assets/images/weather-icons/partlySunnyWShowers.png";
import tStorms from "../assets/images/weather-icons/tStorms.png";
import mostlyCloudyWtStormsDay from "../assets/images/weather-icons/mostlyCloudyWtStormsDay.png";
import partlySunnyWtStorms from "../assets/images/weather-icons/partlySunnyWtStorms.png";
import rain from "../assets/images/weather-icons/rain.png";
import flurries from "../assets/images/weather-icons/flurries.png";
import mostlyCloudyWflurriesDay from "../assets/images/weather-icons/mostlyCloudyWflurriesDay.png";
import partlySunnyWflurries from "../assets/images/weather-icons/partlySunnyWflurries.png";
import snow from "../assets/images/weather-icons/snow.png";
import cloudyWithSnowDay from "../assets/images/weather-icons/cloudyWithSnowDay.png";
import ice from "../assets/images/weather-icons/ice.png";
import sleet from "../assets/images/weather-icons/sleet.png";
import freezingRain from "../assets/images/weather-icons/freezingRain.png";
import rainAndSnow from "../assets/images/weather-icons/rainAndSnow.png";
import hot from "../assets/images/weather-icons/hot.png";
import cold from "../assets/images/weather-icons/cold.png";
import windy from "../assets/images/weather-icons/windy.png";
import clear from "../assets/images/weather-icons/clear.png";
import mostlyClear from "../assets/images/weather-icons/mostlyClear.png";
import partlyCloudy from "../assets/images/weather-icons/partlyCloudy.png";
import intermittentCloudsNight from "../assets/images/weather-icons/intermittentCloudsNight.png";
import hazyMoonlight from "../assets/images/weather-icons/hazyMoonlight.png";
import mostlyCloudyNight from "../assets/images/weather-icons/mostlyCloudyNight.png";
import partlyCloudWShowers from "../assets/images/weather-icons/partlyCloudWShowers.png";
import mostlyCloudyWShowers from "../assets/images/weather-icons/mostlyCloudyWShowers.png";
import partlyCloudyWtStorms from "../assets/images/weather-icons/partlyCloudyWtStorms.png";
import mostlyCloudyWtStormsNight from "../assets/images/weather-icons/mostlyCloudyWtStormsNight.png";
import mostlyCloudyWflurriesNight from "../assets/images/weather-icons/mostlyCloudyWflurriesNight.png";
import cloudyWithSnowNight from "../assets/images/weather-icons/cloudyWithSnowNight.png";

export const weatherIcons = {
  1: sunny,
  2: mostlySunny,
  3: partlySunny,
  4: intermittentCloudsDay,
  5: hazySunshine,
  6: mostlyCloudyDay,
  7: cloudy,
  8: dreary,
  11: fog,
  12: showers,
  13: mostlyCloudWShowers,
  14: partlySunnyWShowers,
  15: tStorms,
  16: mostlyCloudyWtStormsDay,
  17: partlySunnyWtStorms,
  18: rain,
  19: flurries,
  20: mostlyCloudyWflurriesDay,
  21: partlySunnyWflurries,
  22: snow,
  23: cloudyWithSnowDay,
  24: ice,
  25: sleet,
  26: freezingRain,
  29: rainAndSnow,
  30: hot,
  31: cold,
  32: windy,
  33: clear,
  34: mostlyClear,
  35: partlyCloudy,
  36: intermittentCloudsNight,
  37: hazyMoonlight,
  38: mostlyCloudyNight,
  39: partlyCloudWShowers,
  40: mostlyCloudyWShowers,
  41: partlyCloudyWtStorms,
  42: mostlyCloudyWtStormsNight,
  43: mostlyCloudyWflurriesNight,
  44: cloudyWithSnowNight,
};

export const errorMessages = {
  fetchFailed: "Failed to fetch data",
  geolocationFailed: "Unable to retrieve your location",
};

export const defaultLocationData = {
  AdministrativeArea: { ID: "TA", LocalizedName: "Tel Aviv" },
  Country: { ID: "IL", LocalizedName: "Israel" },
  Key: "215854",
  LocalizedName: "Tel Aviv",
  Rank: 31,
  Type: "City",
  Version: 1,
};
