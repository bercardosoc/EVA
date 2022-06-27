# Teste Eva Commerce

Este é um back-end que desenvolve uma API para que os usuários possam cadastrar produtos acrescentando seus preços e descrições. Criado na linguagem TypeScript, com o framework Node, utiliza TypeORM e PostGresql nos bancos de dados e seus relacionamentos. Também foram utilizadas bibliotecas como uuid, yup, jwt, e bcrypt. 


## Como rodar esta aplicação?

Para utilizá-la na sua máquina, basta seguir algum dos passos a seguir:

### 1) Primeira opção - Baixar o arquivo em zip

O arquivo irá ser baixado na sua máquina, assim, basta extraí-lo e entrar na pasta liberada.

### 1) Segunda opção - Clonar o repositório

Você deverá fazer um fork, caso queira criar um repositório no seu próprio perfil. De qualquer forma, você deverá clonar com alguma das três opções disponíveis, copiando o link apresentado.

Em seguida, acesse o terminal da sua máquina e rode o comando 

```shell
git clone git@github.com:bercardosoc/EVA.git
```

Assim, você pode entrar na pasta agora disponível.

### 2) Instale as dependências

Logo, acesse o terminal e rode `yarn` ou `npm install` para que sejam baixadas as dependências da aplicação em `node_modules`. Este processo pode ser um pouco demorado.

### 3) Abra a aplicação no seu editor de código

Para usuários de VS Code, basta rodar um simples `code .` dentro da mesma pasta e assim você poderá fazer o que deseja na aplicação.

### 4) Pré-requisitos para rodar a aplicação

Para que ela funcione corretamente, necessita configurar as variáveis de ambiente, copiando o que há disponível no seu `.env.example` e preenchendo seus dados no seu `.env` local, que você deverá criar na raiz do projeto.

Quando suas variáveis estiverem prontas, você pode rodar as migrations para que estas se integrem com o seu banco de dados local. Para isso, basta rodar:

```shel
yarn typeorm migration:run -d src/data-source.ts
```

### 5) Rodando a aplicação

Agora que você cumpre todos os pré-requisitos, você pode rodá-la com um simples `yarn dev` e ela estará disponível em alguma porta, mas por padrão, provavelmente será a 3000. 

Caso tenha dúvidas, basta checar o terminal, a aplicação tem um console.log que informa.

## Enpoints

### Rotas sem autenticação

## Cadastro de usuário

`POST /users/signup - FORMATO DA REQUISIÇÃO`

```json```
{
	"name": "Bernardo",
	"email": "bernardo@mail.com",
	"password": "senhaforte"
}
```
`POST /users/signup - FORMATO DA RESPOSTA - STATUS 201`

```json```
{
	"email": "bernardo@mail.com",
	"name": "Bernardo",
	"id": "5858cbb7-31b1-49e8-a572-ec21a8c3e744"
}
```
## Login de usuário

`POST /users/signin - FORMATO DA REQUISIÇÃO`

```json```
{
	"email": "bernardo@mail.com",
	"password": "senhaforte"
}
```
`POST /users/signup - FORMATO DA RESPOSTA - STATUS 201`

```json```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4NThjYmI3LTMxYjEtNDllOC1hNTcyLWVjMjFhOGMzZTc0NCIsImlhdCI6MTY1NjM2OTc0OCwiZXhwIjoxNjU2MzczMzQ4fQ.e2pctoTfPMo4f6ko9eM4aHUhbiQH2ln3Ipy0uj2xG1c"
}
```

## Lista de produtos 

`GET /products - FORMATO DA RESPOSTA`

```json
{
	"products": [
		{
			"id": "67a3be9d-6c80-4044-964c-a4d72c54c616",
			"name": "Patinho de borracha",
			"description": "Um objeto para decoração.",
			"price": 5
		},
		{
			"id": "d8ffe37d-c1db-4377-84e5-d58cfbc20cf5",
			"name": "Biscoito integral",
			"description": "Biscoito de morango e banana com aveia.",
			"price": 10
		},
		{
			"id": "3e68013e-2dcf-4cc3-a18a-01615fc6dc7b",
			"name": "Caneca estampada",
			"description": "Caneca com códigos de git na estampa.",
			"price": 15
		}
	]
}
```

### Rotas sem autenticação

São rotas onde é necessário o login do usuário, cujo token de acesso irá disponibilizar informações, como o seu id, para que assim possa ser atribuído como criador.

Assim, onde estas APIs forem testadas, será necessário adicionar algo como `Authorization: Bearer {token}` no cabeçalho da requisição.

## Criação de um produto

`POST /products - FORMATO DE REQUISIÇÃO

```json
{
	"name": "Patinho de borracha",
	"price": 5,
	"description": "Um objeto para decoração."
}
```
`POST /products - FORMATO DE RESPOSTA - 201 CREATED`

```json
{
	"description": "Um objeto para decoração.",
	"price": 5,
	"name": "Patinho de borracha"
}
```
## Deleção de um produto 

`DELETE /products/:id`

```json
Não é necessário corpo de requisição
```

`DELETE /products/:id - FORMATO DE RESPOSTA - 200 OK`

```json
Deletado com sucesso!
```