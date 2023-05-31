
# Task Mannager

Beginner level Node.js project, creating a *user* who can create *what-to-do tasks*. This project idea was been made with ***chatGPT openAI*** with a simple prompt.

 <details>
  <summary> openAI prompt </summary>
  <br>
  Me fale um projeto tema de projeto utilizando node.js e swagger.io com regras de negócio para back-end de nível junior  
 </details>
 
 <details>
  <summary> openAI response </summary>
  <br>
  Descrição:
O projeto consiste em criar um sistema de gerenciamento de tarefas, onde os usuários podem criar, atualizar, visualizar e excluir tarefas. Cada tarefa terá um título, uma descrição, uma data de vencimento e um status indicando se está concluída ou não.

Requisitos:

O sistema deve ser desenvolvido usando Node.js como plataforma de back-end.
Utilize o framework Express.js para criar a estrutura do servidor.
As rotas da API devem ser documentadas usando o Swagger.io.
As regras de negócio devem ser implementadas de acordo com os seguintes critérios:
 - Um usuário pode criar uma nova tarefa fornecendo um título, descrição e data de vencimento.
 - Um usuário pode visualizar todas as tarefas existentes.
 - Um usuário pode atualizar uma tarefa existente, alterando seu título, descrição, data de vencimento ou status.
 - Um usuário pode excluir uma tarefa existente.
 - Ao excluir uma tarefa, ela não deve ser completamente removida do banco de dados, apenas marcada como excluída.
 - As tarefas devem ser filtráveis por status (concluídas ou não concluídas) e por data de vencimento.
 - As tarefas devem ser ordenadas por data de vencimento.
  
Utilize um banco de dados relacional (por exemplo, MySQL ou PostgreSQL) para armazenar as tarefas.
Implemente validações para garantir que os campos obrigatórios sejam fornecidos e que as datas de vencimento estejam no formato correto.
Utilize autenticação JWT (JSON Web Tokens) para proteger as rotas da API.
Implemente testes unitários para as regras de negócio.
Recursos:

 - Node.js: Plataforma de back-end baseada em JavaScript.
 - Express.js: Framework para criação de servidores web em Node.js.
 - Swagger.io: Ferramenta para documentar e testar APIs.
 - Banco de dados relacional (por exemplo, MySQL ou PostgreSQL): Para armazenar as tarefas.
 - JWT (JSON Web Tokens): Mecanismo de autenticação para proteger as rotas da API. 
 </details>
 
 ## Server task's
  - [x] Create a Postgres Docker;
  - [x] Create Database connection;
  - [x] Create *User* model;
  - [x] Create *Task* model;
  - [x] Create *User* controller;
  - [x] Create *User* unity test;
  - [x] Create *Task* controller;
  - [x] Create *Task* unity test;
  - [ ] Create *User routes*;
  - [ ] Create *Task routes*;
  - [ ] Implement a crypto to *User* password;
  - [ ] Implement *JWT* to the project;

## Front-end task's
  - [ ] Create home page, with log-in or create account;
  - [ ] Create 'user not found' page;
  - [ ] Create task's page;
  - [ ] Create new task page;
  - [ ] Create modify task page;
  - [ ] Create 'sure to delete' page;
  - [ ] Create profile page;
  - [ ] Implement log-in authetication;
  - [ ] Implement log-out system;
  - [ ] Implement cache system;
 
