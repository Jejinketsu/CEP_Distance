const axios = require("axios");

const api = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/distancematrix",
});

module.exports = {
    async getDistance(units, origins, destinations, key, language ) {
        const response = await api.get("/json", {
            params: {
                units,
                origins,
                destinations,
                key,
                language
            }
        })
        
        return response.data;
    }
}