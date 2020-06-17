const api = require("./api/api")
const prompt = require("prompt-sync")();

const CEP1 = prompt("Digite um CEP: ");
const NUM1 = prompt("Digite o número do prédio: ");
const CEP2 = prompt("Digite outro CEP: ");
const NUM2 = prompt("Digite o número do prédio: ");

async function run(){
    const distance = await api.getDistanceByZipCode(CEP1, CEP2, NUM1, NUM2)
        .catch(console.error)

    console.log(`A distância é de ${distance}`);
}

run();