
import enviroment from "../config/enviroment.config.js";
import type { IErrorTypes } from "../lib/types/errorhandler.types.js";

class GeocodeService {
    async getLatitudeLongitude(location: string) {
        try {
            console.log(location);
            const accessToken = enviroment.geocodeKeys.locationIq;
            const searchString = `https://us1.locationiq.com/v1/search?key=${accessToken}&q=${encodeURIComponent(location)}&format=json`;
            const fallBackLat = 27.6667;
            const fallBackLong = 85.3500;

            const response = await fetch(searchString);
            const data: any = await response.json();
            if (!data?.[0]?.lat || !data?.[0]?.lon) {
                return { lat: fallBackLat, lon: fallBackLong };
            }
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
        } catch (error) {
            console.error(error);
            throw {
                code: 500,
                message: "Error in GeocodeService: " + (error instanceof Error ? error.message : ""),
                status: "GEOCODE_SERVICE_ERROR"
            } as IErrorTypes;
        }
    }
}

const geoCode = new GeocodeService();
export default geoCode;
