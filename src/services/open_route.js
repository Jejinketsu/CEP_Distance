const axios = require("axios");

const api = axios.create({
    baseURL: "https://api.openrouteservice.org",
});

module.exports = {
    async getDistance(api_key, start, end) {
        const response = await api.get("/v2/directions/driving-car", {
            params: {
                api_key,
                start,
                end
            }
        })
        
        return response.data;
    }
}