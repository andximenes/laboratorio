# CRUD de Tarefas

Aplicação simples de lista de tarefas com interface web, API em Node.js/Express e persistência em SQLite.

## Visão geral

O projeto permite:

- criar tarefas
- listar tarefas
- buscar uma tarefa por `id`
- marcar uma tarefa como concluída
- excluir tarefas
- filtrar a listagem por título, status, ordenação e limite

A interface web fica em `public/` e consome a API REST exposta pelo servidor Express.

## Tecnologias

- Node.js
- Express
- SQLite3
- HTML, CSS e JavaScript

## Estrutura do projeto

```text
crud/
├── controllers/
│   └── tarefasController.js
├── public/
│   ├── css/
│   ├── index.html
│   └── script.js
├── routes/
│   └── tarefas.js
├── db.js
├── server.js
├── README.md
├── database.sqlite
├── package.json
└── package-lock.json
```

## Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor

```bash
node server.js
```

O servidor será iniciado em:

```text
http://localhost:3000
```

Ao subir a aplicação, o arquivo `db.js` garante a criação da tabela `tarefas` caso ela ainda não exista.

## Banco de dados

O projeto usa um banco SQLite local no arquivo `database.sqlite`.

Estrutura da tabela `tarefas`:

```sql
CREATE TABLE IF NOT EXISTS tarefas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  concluida INTEGER NOT NULL DEFAULT 0
);
```

## API

Base URL:

```text
http://localhost:3000/tarefas
```

### Criar tarefa

`POST /tarefas`

Body:

```json
{
  "titulo": "Estudar Express"
}
```

Resposta `201`:

```json
{
  "id": 1,
  "titulo": "Estudar Express",
  "concluida": 0
}
```

### Listar tarefas

`GET /tarefas`

Parâmetros opcionais:

- `titulo`: filtra por trecho do título
- `concluida`: `0` ou `1`
- `ordem`: `asc` ou `desc`
- `limite`: número positivo

Exemplo:

```text
GET /tarefas?titulo=estudar&concluida=0&ordem=desc&limite=5
```

### Buscar tarefa por ID

`GET /tarefas/:id`

Exemplo:

```text
GET /tarefas/1
```

### Atualizar tarefa

`PUT /tarefas/:id`

Body:

```json
{
  "titulo": "Estudar Express e SQLite",
  "concluida": 1
}
```

### Excluir tarefa

`DELETE /tarefas/:id`

## Interface web

Ao acessar `http://localhost:3000`, a página:

- carrega as tarefas existentes
- envia novas tarefas para a API
- marca tarefas como concluídas
- remove tarefas da lista

## Validações atuais

O backend já valida alguns cenários:

- `titulo` deve ser string
- `titulo` não pode ser vazio
- `concluida` deve ser `0` ou `1`
- `ordem` deve ser `asc` ou `desc`
- `limite` deve ser um número positivo

## Observações

- O projeto ainda não possui script `start` no `package.json`
- O script `test` atual é apenas um placeholder
- O banco SQLite é local e persistido em arquivo
