# Instruções de execução

1. Criar um arquivo cypress.env.json, na raiz do projeto, conforme o exemplo abaixo
``` json
{
  "login": "matricula do aluno",
  "password": "senha do portal",
  "email": "email do portal"
}
```

2. Executar o comando
`
npm install
`
ou
`
yarn install
`
para instalar as dependências

3. Executar o comando
`
npm run test:chrome
`
ou
`
yarn test:chrome
`
para rodar os testes