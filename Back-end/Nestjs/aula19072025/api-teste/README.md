<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# 💻 API [Api - Concessionária de Carros]

![Build Status](https://img.shields.io/github/actions/workflow/status/seu-usuario/seu-repo/main.yml?style=for-the-badge)
![License](https://img.shields.io/github/license/seu-usuario/seu-repo?style=for-the-badge)

Uma API RESTful robusta construída com NestJS para gerenciar os carros da concessionárias de veículos, por nome de usuários, marcas de veiculos, modelos, precos e etc...

---

## 📖 Tabela de Conteúdos

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Começando](#-começando)
  - [Pré-requisitos](#-pré-requisitos)
  - [Instalação](#-instalação)
- [Executando a Aplicação](#-executando-a-aplicação)
- [Estrutura dos Endpoints](#-estrutura-dos-endpoints)
- [Licença](#-licença)

---

## 🌟 Sobre o Projeto

Este projeto é uma API backend desenvolvida com o framework **NestJS**, utilizando **TypeScript**. Ele segue as melhores práticas de desenvolvimento, como arquitetura modular, injeção de dependência e o uso de um ORM (Sequelize) para interação com o banco de dados PostgreSQL.

O objetivo é fornecer um conjunto de endpoints seguros e eficientes para [explique o problema que o projeto resolve].

---

## ✨ Tecnologias Utilizadas

As principais tecnologias e bibliotecas usadas neste projeto são:

- **[NestJS](https://nestjs.com/)**: Um framework Node.js progressivo para construir aplicações backend eficientes e escaláveis.
- **[TypeScript](https://www.typescriptlang.org/)**: Um superset do JavaScript que adiciona tipagem estática.
- **[Sequelize](https://sequelize.org/)**: Um ORM (Object-Relational Mapper) para Node.js, facilitando a comunicação com bancos de dados SQL.
- **[PostgreSQL](https://www.postgresql.org/)**: Um poderoso sistema de banco de dados relacional de código aberto.
- **[JWT (JSON Web Tokens)](https://jwt.io/)**: Para autenticação e autorização baseada em tokens.
- **[Class-Validator](https://github.com/typestack/class-validator)** e **[Class-Transformer](https://github.com/typestack/class-transformer)**: Para validação e transformação de dados de requisições.

---

## 🚀 Começando

Siga estas instruções para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### ✅ Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (Recomendado, para rodar o banco de dados PostgreSQL facilmente)

### ⚙️ Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Klaudio0707/Tascom-Academy](https://github.com/Klaudio0707/Tascom-Academy)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Back-end/Nestjs/aula19072025/api-teste
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *ou, se estiver usando Yarn:*
    ```bash
    yarn install
    ```

4.  **Configure as Variáveis de Ambiente:**
    O projeto utiliza um arquivo `.env` para gerenciar as variáveis de ambiente. Há um arquivo de exemplo que deve ser copiado:
    ```bash
    cp .env.example .env
    ```
    Após copiar, abra o arquivo `.env` e preencha as variáveis com suas informações locais (especialmente as credenciais do banco de dados e o segredo JWT).


5.  **Execute as Migrations (se aplicável):**
    Se o projeto usar migrations do Sequelize para criar as tabelas, rode o comando:
    ```bash
    npm run sequelize:migrate
    ```

---

## ▶️ Executando a Aplicação

Com tudo configurado, você pode iniciar a aplicação com os seguintes comandos:

-   **Modo de Desenvolvimento (com hot-reload):**
    ```bash
    npm run start:dev
    ```
    A aplicação estará disponível em `http://localhost:3000` (ou na porta que você definiu no `.env`).

-   **Build de Produção:**
    ```bash
    # Primeiro, crie a build otimizada
    npm run build

    # Depois, inicie o servidor de produção
    npm run start:prod
    ```

-   **Executando Testes:**
    ```bash
    # Rodar testes unitários
    npm run test

    # Rodar testes e2e
    npm run test:e2e
    ```

---

## 📡 Estrutura dos Endpoints

A API está organizada em torno de recursos RESTful. Abaixo estão alguns dos principais endpoints disponíveis:

| Método HTTP | Endpoint           | Descrição                                 |
| :---------- | :----------------- | :---------------------------------------- |
| `POST`      | `/auth/login`      | Autentica um usuário e retorna um token JWT. |
| `GET`       | `/brands`          | Lista todas as marcas de veículos.        |
| `POST`      | `/brands`          | Cria uma nova marca.                      |
| `GET`       | `/car-models/allCar`| Lista todos os modelos de carros.         |
| `POST`      | `/car-models`      | Cria um novo modelo de carro.             |
| `PATCH`     | `/car-models/:id`  | Atualiza um modelo de carro existente.    |
| `POST`      | `/vehicles`        | Cadastra um novo veículo para um usuário. |
| `GET`       | `/users`           | Lista todos os usuários.                  |

*Para uma documentação completa e interativa dos endpoints, inicie a aplicação e acesse a rota do Swagger UI em `http://localhost:3000/api`.*

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
Feito com ❤️ por [Cláudio](https://github.com/Klaudio0707)