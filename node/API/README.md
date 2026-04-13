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


