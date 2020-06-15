# Getting Started

## Rodando a aplicação

### Requisitos
* [node LTS](https://nodejs.org/pt-br/download/)
* [axios](https://www.npmjs.com/package/axios)
* [prompt-sync](https://www.npmjs.com/package/prompt-sync?activeTab=readme)
* key da Google Cloud

Para usar usar o programa instale a última versão estável do Node e rode o comando na raiz do projeto:

```
npm install
```
Antes de executar ainda é necessário de uma key do Google Cloud, mas considerando que você já a tenha, para executar a aplicação use:
```
npm start
```

## Key da Google Cloud

Para conseguir uma key acesse a [google cloud](https://cloud.google.com/) e crie uma conta gratuita. Será necessário colocar um cartão de crédito, mas o Google não fará cobranças a menos que você ative o serviço completo. Para esse projeto apenas será necessario o recurso de rotas.

Assim que acessar o dashbord na sua conta, procure pela Maps Platform ou pelo Google Maps. Ao acessar você verá os vários serviços de mapas que o Google diponibiliza. Aqui precisaremos apenas do *Distance Matrix*. Entre na página da API e ative-a. Em seguida vá para o menu de credenciais. Provavelmente ainda não averão chaves cadastras. Se for o caso, haverá um link na página para ver todas as suas chaves. Clique nele. Na página seguindo clique no botão de criar uma chave e escolha a opção de chave para API. A sua chave terá sido criada.

Agora que você já tem sua chave, acesse o arquivo **key.json** na pasta **services** e copie sua chave para o campo no json. Feito isso a aplicação estará pronta para rodas.

## Entrada

Para mais informações sobre a entrada do programa, veja na documentação do google como funciona a entrada do [geocoding](https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes) e o que ele é capaz de traduzir para latitude e longitude.
