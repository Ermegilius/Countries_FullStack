import { api } from "../axios";
import { WeatherData } from "../../types/weather";

export const weatherApi = {
	getWeatherByCity: (city: string, units: "metric" | "imperial"): Promise<WeatherData> => {
		const API_KEY = process.env.VITE_WEATHER_API_KEY;
		if (!API_KEY) {
			throw new Error("Missing API key. Please add your API key to the .env file.");
		}
		return api.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`
		);
	},
};
