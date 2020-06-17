const axios = require("axios");

const api = axios.create({
    baseURL: "https://viacep.com.br/ws"
});

module.exports = {
    async getZipCodeInfo(cep) {
        const response = await api.get(`/${cep}/json`, {});

        return response.data;
    }
}