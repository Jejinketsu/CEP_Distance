module.exports = { 
    format(number, adress){
        let formatAdress = "";
        if(adress.logradouro) formatAdress += `${adress.logradouro}, `;
        if(number) formatAdress += `${number}, `;
        if(adress.bairro) formatAdress += `${adress.bairro}, `;
        if(adress.localidade) formatAdress += `${adress.localidade}, `;
        if(adress.uf) formatAdress += `${adress.uf}, `;
        formatAdress += "Brazil";

        return formatAdress;
    }
}