# Boas vindas ao repositório backend do projeto <b>Social Media</b>!

Esse projeto foi desenvolvido com o objetivo de simular uma rede social!!

## Tecnologias utilizadas:

- TypesCript;
- Node
- Express;
- Jwt (Json Web Token);
- Sequelize;
- MySql;
- Joi para validações.

---

# Funcionalidades do projeto:

CRUD é um acrônimo para **C**reate, **R**ead, **U**pdate and **D**elete. Em português seria **Criar**, **Ler**, **Atualizar** e **Deletar** registros. Nesse projeto trabalhei diretamente com a manipulação no banco de dados MySQL, utilizando do ORM Sequelize para a manipulação do banco, onde estão registrados as tabelas de usuários (Users) e seus respectivos posts (SocialPosts).

## Como rodar o projeto:

Clone a aplicação com o comando: 
```
git clone git@github.com:VictorVidal08/backend-waid.git
```
Entre no diretório da aplicação:
```
cd backend
```
Instale as dependências do projeto:
```
npm install
```
O projeto utiliza as portas 3306 (base de dados), 3001 para o backend 3000 para frontend. Estas portas precisam estar livres para que a aplicação funcione.
### Subindo a base de dados:

Um arquivo .env deve ser criado na raiz da aplicação com o seguinte conteudo:
```
MYSQL_USER=root
MYSQL_PASSWORD=senha_mysql
MYSQL_DATABASE=orm_social_media
MYSQL_HOST=localhost
JWT_SECRET=jwt_pepper
```
Caso não tenha o MySql instalado, é possivel subir um container com o comando:
```
docker container run --name waid-db-mysql -e MYSQL_ROOT_PASSWORD=senha_mysql -d -p 3306:3306 mysql:8.0.29
```

Para Criar as tabelas e popular com os dados iniciais, é necessário rodar os comandos abaixo:
```
npx sequelize db:create

npx sequelize db:migrate

npx sequelize db:seed:all
```
### Para rodar o projeto:

execute o comando abaixo para rodar a aplicação em modo de desenvolvedor: 
```
npm run dev
```
---
## **Requisitos:**

### Registrar

    • Um usuário DEVE poder se registrar usando nome, email e senha

### Login

    • O email DEVE ser único por usuário
    • Um usuário DEVE poder fazer login com email e senha

### Listar postagens

    • Um usuário logado DEVE poder visualizar o feed de postagens

### Criar postagem

    • Um usuário logado DEVE poder criar postagens

### Editar postagem

    • Um usuário logado DEVE poder editar suas próprias postagens
    • Um usuário NÃO DEVE poder editar postagens de outros usuários

### Remover postagem

    • Um usuário logado DEVE poder remover suas próprias postagens
    • Um usuário NÃO DEVE poder remover postagens de outros usuários

---

## 📚 Documentação (endpoints)
## Users:
### Login:

| Método | Funcionalidade           | URL                         |
| ------ | ------------------------ | --------------------------- |
| `POST` | Realiza login no backend | http://localhost:3001/login |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
  "email": "lewishamilton@gmail.com",
  "password": "123456",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
  "id": 1,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJlbWFpbCI6Imxld2lzaGFtaWx0b25AZ21haWwuY29tIn0sImlhdCI6MTY3MDUxMjA1NCwiZXhwIjoxNjcxMTE2ODU0fQ.x3i5WaQJNbI3NfCy6iQXqBUOe5sIBhA44j0rcEKu8vU"
}
```
</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Some required fields are missing</code> caso alguma informação esteja faltando no body da requisição;<br>
  - A rota retorna o código <code>401</code>, com a mensagem <code>Incorrect username or password</code> caso alguma informação seja inválida no body da requisição.
</details>
<br>

### Registrar novo usuário:

| Método | Funcionalidade                             | URL                        |
| ------ | ------------------------------------------ | -------------------------- |
| `POST` | Adiciona um novo usuário no banco de dados | http://localhost:3001/user |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"userName" length must be at least 3 characters long</code> caso o campo displayName tenha menos de 3 caracteres body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"email" must be a valid email</code> caso o campo displayName tenha menos de 3 caracteres body da requisição;<br>
  - A rota retorna o código <code>400</code>, com a mensagem <code>"password" length must be at least 6 characters long</code> caso o campo password tenha menos de 6 caracteres body da requisição;<br>
  - A rota retorna o código <code>409</code>, com a mensagem <code>User already registered</code> caso o usuário já exista no banco de dados.
</details>
<br>

## ⚠️⚠️ Validando token nas requisições ⚠️⚠️

Todos endpoints abaixo devem respeitar a regra de autenticação (login). Assim sendo, todas as requisições abaixo devem, obrigatoriamente, ter um `token de autenticação` nos headers, no campo `authorization` (obtido após realizar o login ou cadastrar um usuário).
### Listar usuários:

| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Retorna uma lista de usuários cadastrados | http://localhost:3001/user |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },

  /* ... */
]
```

</details>
<br>

## Posts:
### Listar todos os Posts:

| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Retorna uma lista de postagens realizadas | http://localhost:3001/posts |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2022-12-07T16:43:36.000Z",
    "updated": "2022-12-07T16:43:36.000Z",
    "user": {
      "id": 1,
      "userName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    }
  },
  
  /* ... */
]
```

</details>
<br>

### Cadastrando novo post


| Método | Funcionalidade                               | URL                        |
| ------ | -------------------------------------------- | -------------------------- |
| `POST` | Adiciona uma nova postagem ao banco de dados | http://localhost:3001/post |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "title": "Latest updates, December 7",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 2
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>

```json
{
  "id": 3,
  "title": "Latest updates, December 7",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 2,
  "updated": "2022-12-18T18:00:01.196Z",
  "published": "2022-12-18T18:00:01.196Z"
}
```

</details>

### Editando postagem:

| Método | Funcionalidade                                                                                            | URL                            |
| ------ | --------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `PATCH`  | Permite que o usuário logado atualize uma postagem dele no banco de dados (substitua `:id` por um número) | http://localhost:3001/post/:id |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
  "title": "Latest updates, December 7",
  "content": "The whole text for the blog post goes here in this key"
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
  "id": 3,
  "title": "Latest updates, December 7",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "published": "2022-12-18T18:00:01.000Z",
  "updated": "2022-12-18T18:07:32.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
}
```

</details>

### Removendo postagem:

| Método   | Funcionalidade                                                                                          | URL                            |
| -------- | ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `DELETE` | Permite que o usuário logado delete uma postagem dele no banco de dados (substitua `:id` por um número) | http://localhost:3001/post/:id |

A rota retorna o status 204, <code>'Post deleted successfully'</code>.

---

## Próximos passos:

Usar BCrypt para criptografia de senha do usuário.
Implementação de testes.
