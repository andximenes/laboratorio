#iniciando um projeto em node
`npm init -y `

#Estrutura do projeto:

API
|___src
|   |__server.js
|
|__package.json
|__README.md


#importação de pacotes do node.js
modo antigo: 
`const http = require("http")`

modo atual:
`import http from "node:http"`

Para o usar o importação do pacote no modelo atual, adicionamos uma nova propriedade dentro do objeto para podermos usar o verão `import http from "node:http"`. Adicionamos a propriedade:

`"type": module,` //propriedade "type" com o valor "module".


#criando um servidor e passando o número da porta em que o servidor vai atender as requisições

//importando módulo
`import http from "node:http"`

//servidor criado
`const server = http.createServer((request, response) => {`
    return response.end("Hello World🚀")
`})` 
//porta utilizada
`server.listen(3333)` //escutando a porta 3333

//testando
no temrinal execute: `node src/server.js`
no nvegador: `localhost:3333`