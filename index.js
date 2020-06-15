const api = require("./services/get_distance");
const key = require("./services/key.json")["key"]
const prompt = require("prompt-sync")();

const CEP1 = prompt("Digite um CEP: ");
const CEP2 = prompt("Digite outro CEP: ");

async function run(){
    const res = await api.getDistance("metrico", CEP1, CEP2, key, "PT-br")
        .catch(console.error)

    const origin = res.origin_addresses[0];
    const destination = res.destination_addresses[0];
    const distance = res.rows[0].elements[0].distance.text;

    console.log(`A distância entre ${origin} e ${destination} é de ${distance}`);
}

run();