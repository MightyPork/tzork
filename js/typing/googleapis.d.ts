declare module Google {

    interface Loc {
        lat:number;
        lng:number
    }

    interface Place {
        address_components: {
            long_name: string;
            short_nam: string;
            types: string[];
        }[];

        formatted_address: string;

        geometry: {
            bounds:{
                northeast: Loc;
                southwest: Loc;
            };
            location: Loc;
            location_type: string;//enum?
            viewport: {
                northeast: Loc;
                southwest: Loc;
            };
        };

        place_id : string;
        types :string[];
    }

    /** Response from the Google Geocode API */
    interface GeoResponse {
        status: string;
        results?: Place[];
    }

    /** Google timezone API response */
    interface TzResponse {
        status: string;
        dstOffset?: number;
        rawOffset?: number;
        timeZoneId?: string;
        timeZoneName?: string;
    }
}
