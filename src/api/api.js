const api_viaCep = require("../services/via_cep");
const api_openRoute = require("../services/open_route");
const api_locationIq = require("../services/location_iq");
const key_open_route = require("../key.json")["key_open_route"];
const key_location_iq = require("../key.json")["key_location_iq"];
const formatAdress = require("../utils/formatAdress");

async function getDistanceByZipCode(cep_from, cep_to, number_from, number_to){
    const cep_from_info = await api_viaCep.getZipCodeInfo(cep_from)
        .catch(console.error);
    const cep_to_info = await api_viaCep.getZipCodeInfo(cep_to)
        .catch(console.error);

    const locationA = await api_locationIq.geocoding(
        key_location_iq,
        formatAdress.format(number_from, cep_from_info)
    );

    const locationB = await api_locationIq.geocoding(
        key_location_iq,
        formatAdress.format(number_to, cep_to_info)
    );

    const coord_from = `${locationA[0].lon},${locationA[0].lat}`;
    const coord_to = `${locationB[0].lon},${locationB[0].lat}`;

    const res = await api_openRoute.getDistance(key_open_route, coord_from, coord_to)
        .catch(console.error);

    const distance = res.features[0].properties.summary.distance;

    return distance;
}

module.exports = {
    getDistanceByZipCode
}