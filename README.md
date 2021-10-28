# Burger Queen - API com Node.js


| :bust_in_silhouette: Demo User :computer: |
| --------------------- |
| :e-mail: Email: bq@teste.com |
| :lock: Password: 123456 |

## :round_pushpin: Índice

* [1. Sobre o projeto](#1-sobre-o-projeto)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Ferramentas utilizadas](#3-ferramentas-utilizadas)
* [4. Endpoints](#4-endpoints)
* [5. Desenvolvedora](#5-desenvolvedora)


## 1. Sobre o projeto :computer:

Um pequeno restaurante de hamburgueres, em crescimento, necessitava de um sistema para realizar pedidos usando um tablet, e que os enviem à cozinha para que sejam preparados de forma ordenada e eficiente.

A interface front-end da aplicação já foi criada acesse [aqui](https://sap-006-burger-queen-api-client-lac.vercel.app/) para conhecer.

E agora foi criado o back-end para manejar os dados. Feito através de uma API rest que é compatível com as requisições vindas do front.

:computer_mouse: [Aqui](https://sap006-burgerqueen-api.herokuapp.com/documentation/) você consegue acessar a API.

## 2. Resumo do projeto :page_facing_up:
Como back-end, nesse caso nos referimos a um servidor web, que é basicamente um programa que ouve o que acontece na aplicação através de uma porta de rede, pela qual podemos enviar requisições (requests) e obter respostas (responses).

Um servidor web deve manejar as requisições que chegam e devolver respostas a elas, que serão enviadas de volta ao cliente. Quando falamos de aplicações de servidor, isso implica uma arquitetura de cliente/servidor, onde o cliente é um programa que faz requisições através de uma rede (por exemplo o navegador, o URL, etc) e o servidor é o programa que recebe essas requisições e as responde.

Neste projeto, foi desenvovido um servidor web que _serve_ `JSON`
através de uma conexão `HTTP`, e está implantado em um servidor na nuvem.

## 3. Ferramentas utilizadas :books:

* Node.js
* Express
* Sequelize
* Heroku
* PostgreSQL
* Postman
* Swagger

## 4. Endpoints :open_file_folder:

#### 4.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 4.2 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 4.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

#### 4.4 `/auth`

* `POST /auth`

## 5. Desenvolvedora :woman_technologist: <br>
### :woman_artist: Liziane
[LinkedIn](https://www.linkedin.com/in/lizianegarciadarosa/)


