# Sistema de Gerenciamento de Usuários e Transações Financeiras

Este é um projeto de frontend para um sistema de gerenciamento de usuários e transações financeiras. O objetivo deste sistema é permitir que os usuários se cadastrem, façam login, busquem outros usuários cadastrados, enviem dinheiro virtual para contas de outros usuários e vejam o histórico de transações realizadas.

FIGMA: https://www.figma.com/file/VCWKplAVkA2HKPZFR65djY/APPPAY?type=design&t=rOzG3loZjVWx5Ns6-1

## Funcionalidades

O sistema possui as seguintes funcionalidades:

- Cadastro de Usuário: o usuário pode se cadastrar no sistema fornecendo informações como username, e-mail e senha. O sistema valida os dados fornecidos e armazena o usuário na base de dados.

- Login com Autenticação por Token: o usuário pode fazer login no sistema fornecendo seu e-mail e senha. O sistema valida as informações e gera um token de autenticação que é armazenado no navegador do usuário. Esse token é utilizado para verificar se o usuário está autenticado e autorizado a acessar as funcionalidades do sistema.

- Busca de Usuários: o usuário pode buscar outros usuários cadastrados no sistema por 'username'. O sistema exibe os resultados da busca em uma lista de sugestões.

- Envio de Dinheiro Virtual: o usuário pode enviar dinheiro virtual para a conta de outro usuário cadastrado no sistema. Para fazer isso, o usuário deve fornecer o valor a ser transferido e o 'username' do destinatário. O sistema valida as informações e realiza a transferência de dinheiro virtual entre as contas dos usuários.

- Histórico de Transações: o sistema mantém um registro de todas as transações realizadas pelos usuários, incluindo o valor transferido, a data e o destinatário. O usuário pode acessar seu histórico de transações a qualquer momento e ver todas as transferências realizadas em sua conta.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- HTML, CSS e JavaScript para construção da interface do usuário;
- React para criação dos componentes e gerenciamento de estado da aplicação;
- Context API para gerenciamento de estado global da aplicação;
- Styled Components para estilização e layout responsivo.

# API da aplicação

O sistema backend criado em Node.js para esta aplicação utiliza o TypeORM como ORM (Object-Relational Mapping) para interagir com o banco de dados PostgreSQL.

O backend inclui as seguintes funcionalidades:

- Endpoints para cadastro de usuários e autenticação por token
- Endpoint para busca de outros usuários cadastrados na aplicação
- Endpoint para envio de dinheiro virtual para contas de outros usuários
- Endpoint para registro e leitura de histórico de transações realizadas

O código do backend encontra-se no repositório do GitHub: https://github.com/luizpcardoso/Full-Stack-charllenger-API. Certifique-se de configurar corretamente as variáveis de ambiente e instalar as dependências necessárias antes de executar a aplicação.
