declare class GeocodeService {
    getLatitudeLongitude(location: string): Promise<{
        lat: number;
        lon: number;
    }>;
}
declare const geoCode: GeocodeService;
export default geoCode;
//# sourceMappingURL=geocode.service.d.ts.map