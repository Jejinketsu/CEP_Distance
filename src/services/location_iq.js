const axios = require("axios");

const api = axios.create({
    baseURL: "https://us1.locationiq.com",
});

module.exports = {
    async geocoding(key, q) {
        const response = await api.get("/v1/search.php", {
            params: {
                key,
                q,
                format: "json"
            }
        })
        
        return response.data;
    }
}