# AgendeiJS - API

## Sobre o Projeto

AgendeiJS é uma API desenvolvida para gerenciar agendamentos de serviços em um sistema de gestão. Essa API permite o cadastro de usuários, serviços, profissionais e agendamentos, fornecendo funcionalidades completas para integrar aplicações frontend.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express**: Framework minimalista para Node.js.
- **SQLite**: Banco de dados relacional leve e integrado.
- **JWT**: Para autenticação e segurança.

## Funcionalidades Principais

- Cadastro de usuários, serviços e profissionais.
- Agendamento de serviços com vínculo a usuários e profissionais.
- Listagem de agendamentos por usuário.
- Autenticação de usuários com JWT.

## Estrutura do Projeto

```
AgendeiJS/
├── src/
│   ├── database/          # Configurações do banco de dados SQLite
│   ├── controllers/       # Controladores para as rotas
│   ├── repositories/      # Lógica de acesso ao banco de dados
│   └── services/          # Lógica de negócio
│ ├── routes.js            # Definição das rotas da API
│ ├── token.js            # Definição de criação de token por usuario
├── tests/                 # Testes automatizados
├── .env                   # Variáveis de ambiente
├── package.json           # Gerenciador de dependências
└── README.md              # Documentação
```

## Pré-requisitos

- Node.js (v22.11.0 ou superior)
- NPM ou Yarn

## Configuração do Ambiente

1. Clone este repositório:
   ```bash
   git clone https://github.com/username/agendei-api.git
   cd agendei-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   PORT=3001
   JWT_SECRET=your_secret_key
   ```

4. Inicialize o banco de dados:
   ```bash
   npm run db:init
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

A API estará disponível em `http://localhost:3001`.

## Rotas Principais

### Autenticação
- **POST /auth/login**: Realiza login e retorna um token JWT.

### Usuários
- **POST /users**: Cadastra um novo usuário.
- **GET /users/:id**: Retorna detalhes de um usuário.

### Serviços
- **POST /services**: Cadastra um novo serviço.
- **GET /services**: Lista todos os serviços.

### Agendamentos
- **POST /appointments**: Cria um novo agendamento.
- **GET /appointments/user/:id**: Lista agendamentos de um usuário.

## Testes

Execute os testes com:
```bash
npm test
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto! Para isso:

1. Faça um fork do repositório.
2. Crie uma branch para a funcionalidade ou correção:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie para a branch principal:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

