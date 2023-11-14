# CrudUserService

Este é um projeto Node.js que utiliza o Prisma como ORM para facilitar a interação com o banco de dados.

## Requisitos

- Node.js 16.16.0
- Prisma 5.5.2

## Configuração

- Clone este repositório:

  ```bash
  git clone https://github.com/cipriano98/crud-user-service.git
  ```

- Instale as dependências:

  ```bash
  npm install
  ```

- Execute as migrations para criar o esquema do banco de dados: (O servidor não pode estar rodando para o sucesso deste passo)

  ```bash
  npm run migrate
  ```

  Escolha um nome para a migrate ou apenas precione 'enter' para proceguir.

- Gere o cliente Prisma:

  ```bash
  npm run generate
  ```

- Para iniciar o servidor, utilize o seguinte comando:

  ```bash
  npm start
  ```

  O servidor estará disponível em http://localhost:3000.

- Para visualizar o banco de dados no seu navegador:

  ```bash
  npm run studio
  ```

- Para gerar o build do docker:

  ```bash
  npm run docker:build
  ```

- Para rodar do docker:

  ```bash
  npm run docker:run
  ```

- Para realizar o push do docker:
  ```bash
  npm run docker:push
  ```
