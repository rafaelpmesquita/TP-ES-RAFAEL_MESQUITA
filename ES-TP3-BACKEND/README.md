# Backend API

## Descrição
Este é um back-end desenvolvido em Node.js com Express, Sequelize, e autenticação JWT. Ele fornece uma API RESTful para gerenciar usuários e ações sustentáveis, além de calcular estatísticas.

## Estrutura de Diretórios

/backend
├── /controllers
├── /models
├── /routes
├── /services
├── config.js
├── server.js
├── .env
└── README.md


## Endpoints

- `POST /api/auth/login`: Autenticação de usuário e geração de token JWT.
- `POST /api/auth/signup`: Registro de um novo usuário.
- `GET /api/user`: Retorna informações do usuário logado.
- `GET /api/actions`: Retorna lista de ações sustentáveis cadastradas.
- `POST /api/actions`: Registra uma nova ação sustentável.
- `GET /api/stats`: Retorna estatísticas das ações cadastradas.

## Segurança

- Autenticação JWT: Middleware para validar tokens JWT enviados nos cabeçalhos HTTP.
- Autorização: Utilização de roles (por exemplo, usuário normal e administrador) para controlar acessos aos endpoints.

## Como Executar

1. Crie um arquivo `.env` e configure as variáveis `JWT_SECRET` e `DB_NAME`.
2. Execute `npm install` para instalar as dependências.
3. Execute `node server.js` para iniciar o servidor.

## Dependências

- Node.js
- Express
- Sequelize
- SQLite
- JSON Web Token (JWT)
- bcryptjs
- dotenv
