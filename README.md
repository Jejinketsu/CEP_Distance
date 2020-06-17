# Getting Started

## Rodando a aplicação

### Requisitos
* [node LTS](https://nodejs.org/pt-br/download/)
* [axios](https://www.npmjs.com/package/axios)
* [prompt-sync](https://www.npmjs.com/package/prompt-sync?activeTab=readme)
* [Via CEP](https://viacep.com.br/)
* key do [Openroute](https://openrouteservice.org/plans/)
* key do [LocationIQ](https://locationiq.com/pricing)

Para usar usar o programa instale a última versão estável do Node e rode o comando na raiz do projeto:

```
npm install
```
Antes de executar ainda é necessário ter as keys do Openroute e LocationIQ, mas considerando que você já as tenha, para executar a aplicação use:
```
npm start
```

## Openroute

### Função no código

Este serviço está sendo usado para calcular a rota entre os dois pontos informados pelo cliente. Em termo técnico, está sendo usada a função de *Directions* da API.

### Adquirindo uma key

Para conseguir uma key acesse a [Openroute](https://openrouteservice.org/) e crie uma conta. Ela é gratuita, nenhuma informação de pagamento é requisitada.

Assim que acessar o dashbord na sua conta verá um botão para criar sua chave. Selecione o tipo "FREE" e dê um nome para sua key. Então aperte no botão. Sua key irá aparecer na tela. Para copia-la basta clicar nela.

Agora que você já tem sua chave, acesse o arquivo `key.json` na pasta **services** e copie sua chave para o campo `key_open_route` no json.

### Limitações

* Oferece 2.000 requests/dia e 40 requests/minuto para requests de Directions.

## LocationIQ

### Função no código

Este serviço está sendo usado para traduzir o endereço informado pelo usuário em pontos geográficos de latitude e longitude. O Openroute só recebe esses pontos geográficos na função de Direction, por isso é necessário fazer a tradução. O termo técnico para essa tradução é *Geocoding*.

O Openroute oferece esse serviço também, mas é defeituoso e não atende os requisitos.

### Adquirindo uma key

Para conseguir uma key acesse a [LocationIQ](https://locationiq.com/) e crie uma conta. Ela tem plano gratuito. Para utilizá-lo comercialmente basta colar um link deles em sua página com o seguinte código:
```
<a href='https://locationiq.com'>Search by LocationIQ.com</a>
```
Após criar sua conta a primeira página a aparecer é dashboard. Se não estiver na página certa, clique no botão **DASHBOARD** no topo da página. Sua estará disponível no campo *Your Token*. 

Agora que você já tem sua segunda chave, acesse o arquivo `key.json` na pasta **services** e copie sua chave para o campo `key_location_iq` no json.

Com suas duas chaves prontas, o código já pode ser executado.

### Limitações

* O plano FREE oferece 10000 requests/dia e 2 requests/segundo;
* É necessário usar o link para o site da LocationIQ;
* Só é possivel ter 1 key;
* Acesso apenas a mapas de rotas, não imagens de satélite;
* Tem suporte por email;
* Não tem endpoint dedicado. O que está sendo usado fica nos Estados Unidos.

## Via CEP

Um terceiro serviço aberto está sendo usado para traduzir o CEP e o número informados pelo usuário em um endereço completo. As ferramentas de *Geocondig* gratuitas não entendem CEP, apenas endereço por extenso. Essa API não precisa de key e á 100% gratuita.

### Limitações

Não é bem especificado na página da API qual o limite de requisições. Apenas diz ser um serviço de alto desempenho. No entanto, há um aviso de bloqueio por IP caso seja detectado acessos massivos (como um DDoS).

## Entrada

O usuário deve digitar o CEP, mas o número do prédio é opcional.

## NUNCA SUBA SUAS KEYS NO REPOSITÓRIO