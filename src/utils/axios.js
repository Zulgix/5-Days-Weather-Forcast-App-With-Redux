import axios from "axios";

export const apikey = "ZJDU7sDkJZdgZ9Yia09K7bGzdt7e0dOe";

export const accuweatherInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});
