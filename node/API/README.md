#INICIANDO UM PROJETO EM NODE
`npm init -y `

#ESTRUTURA DO PROJETO

API
|___src
|   |__server.js
|
|__package.json
|__README.md


#IMPORTAÇÃO DOS PACOTES DO NODE.JS
modo antigo: 
`const http = require("http")`

modo atual:
`import http from "node:http"`

Para o usar o importação do pacote no modelo atual, adicionamos uma nova propriedade dentro do objeto para podermos usar o verão `import http from "node:http"`. Adicionamos a propriedade:

`"type": module,` //propriedade "type" com o valor "module".


#CRIANDO UM SERVIDOR E PASSANDO O NÚMERO DA PORTA 
//importando módulo
`import http from "node:http"`

//servidor criado
`const server = http.createServer((req, res) => {`
    return response.end("Hello World!")
`})` 
//porta utilizada
`server.listen(3333)` //escutando a porta 3333

//testando
no temrinal execute: `node src/server.js`
no nvegador: `localhost:3333`


#NODE WATCH
Para a cada mudança feita não termos que parar o servidor e executa-lo novamente usamos no temrinal a flag `--watch`:

`node --watch src/server.js`


#CRIANDO SCRIPTS PERSONALIZADOS

No nosso arquivo `package.json`, dentro da propriedade "scripts", criamos o seguinte parâmetro:

"scripts": {
    "dev": "node --watch rsc/server.js"
}

para rodar usamos:
`npm run dev` 

`observação`: se mudarmos o script de `dev` para `start` podemos usar apenas `npm start`, pois ele é um padrão do node, mas o mesmo não acontece se fizermos npm dev. 