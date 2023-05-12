# Sequelize com TypeScript

## Objetivos de estudo
- O objetivo deste projeto é ajudar a entender como usar o TypeScript e o Sequelize para criar um aplicativo CRUD (Create, Read, Update, Delete) básico com relacionamentos N:N e 1:N.

## Requisitos
- Você precisa criar um aplicativo TypeScript e Sequelize que permita aos usuários gerenciar seus pets e clínicas. O aplicativo deve atender aos seguintes requisitos:

- O aplicativo deve ter 3 modelos: Usuário, Clínica e Pet.

- O modelo de usuário deve ter as seguintes propriedades:
  - id (integer)
  - name (string)
  - email (string)
  - password (string)
  - role (string)

- O modelo de clínica deve ter as seguintes propriedades:
  - id (integer)
  - name (string)
  - address (string)
  - phone (string)

- O modelo de pet deve ter as seguintes propriedades:
  - id (integer)
  - name (string)
  - age (integer)
  - breed (string)
  - weight (float)
  - gender (string)

- Um usuário pode ter vários pets e um pet pertence a um único usuário (relacionamento 1:N).
- Uma clínica pode ter vários pets e um pet pode pertencer a várias clínicas (relacionamento N:N).
- O aplicativo deve permitir aos usuários criar, atualizar e excluir seus pets e clínicas.