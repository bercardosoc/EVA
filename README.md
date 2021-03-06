# Teste Eva Commerce

Este é um back-end que desenvolve uma API para que os usuários possam cadastrar produtos acrescentando seus names, preços e descrições, dentro de alguma categoria existente. O usuário também pode cadastrar as suas categorias. 

Criado na linguagem TypeScript, com o framework Node, utiliza TypeORM e PostGresql nos bancos de dados e seus relacionamentos. Também foram utilizadas bibliotecas como uuid, yup, jwt, e bcrypt. 

## Como rodar esta aplicação?

Para utilizá-la na sua máquina, basta seguir os passos a seguir:

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

Logo, acesse o terminal e rode `yarn` ou `npm install` para que sejam baixadas as dependências da aplicação como `node_modules`. Este processo pode ser um pouco demorado.

### 3) Abra a aplicação no seu editor de código

Para usuários de VS Code, basta rodar um simples `code .` dentro do terminal no mesmo diretório/pasta e assim você poderá fazer o que deseja na aplicação.

### 4) Pré-requisitos para rodar a aplicação

Para que ela funcione corretamente, necessita configurar as variáveis de ambiente, copiando o que há disponível no seu `.env.example` e preenchendo seus dados no seu `.env` local, que você deverá criar na raiz do projeto.

Quando suas variáveis estiverem prontas, você pode rodar as migrations para que estas se integrem com o seu banco de dados local. Para isso, basta rodar:

```shell
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

```json
{
	"email": "bernardo@mail.com",
	"name": "Bernardo",
	"id": "5858cbb7-31b1-49e8-a572-ec21a8c3e744"
}
```
## Login de usuário

`POST /users/signin - FORMATO DA REQUISIÇÃO`

```json
{
	"email": "bernardo@mail.com",
	"password": "senhaforte"
}
```
`POST /users/signup - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4NThjYmI3LTMxYjEtNDllOC1hNTcyLWVjMjFhOGMzZTc0NCIsImlhdCI6MTY1NjM2OTc0OCwiZXhwIjoxNjU2MzczMzQ4fQ.e2pctoTfPMo4f6ko9eM4aHUhbiQH2ln3Ipy0uj2xG1c"
}
```

## Lista de produtos 

`GET /products - FORMATO DA RESPOSTA - STATUS 200`

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

## Lista de produtos por preço

`GET /products/:maior - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"products": [
		{
			"id": "3dd70396-cacd-4417-933c-4642efd46802",
			"name": "barraca de acampamento",
			"description": "acampe sem preocupação",
			"price": 100
		},
		{
			"id": "11b755f2-a4d7-487c-afea-f0863da0b1b9",
			"name": "patinho de borracha",
			"description": "o seu melhor amigo para pair coding",
			"price": 1
		}
	]
}
```

`GET /products/:menor - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"products": [
		{
			"id": "11b755f2-a4d7-487c-afea-f0863da0b1b9",
			"name": "patinho de borracha",
			"description": "o seu melhor amigo para pair coding",
			"price": 1
		},
		{
			"id": "3dd70396-cacd-4417-933c-4642efd46802",
			"name": "barraca de acampamento",
			"description": "acampe sem preocupação",
			"price": 100
		}
	]
}
```

## Lista de categorias 

Esta é uma rota que além de retornar as categorias propriamente ditas, também tem a importância de trazer os produtos por categoria. 

`GET /categories - FORMATO DA RESPOSTA - STATUS 200`

```json 

{
	"categories": [
		{
			"categoryId": "2f397495-1c59-4506-b803-bc1fb86e10f0",
			"name": "lazer",
			"description": "os melhores produtos de lazer",
			"products": [
				{
					"id": "b52ffdaf-0f64-4158-b123-e28a886249a5",
					"name": "barraca de acampamento",
					"description": "acampe sem preocupação",
					"price": 100
				}
			]
		},
		{
			"categoryId": "ea6294fe-3bd3-4603-91d2-45c7f1bd68ab",
			"name": "decoração",
			"description": "os melhores produtos de decoração",
			"products": [
				{
					"id": "c4333adc-b1c6-4217-92a4-7c25ec57d632",
					"name": "patinho de borracha",
					"description": "seu melhor amigo de pair coding",
					"price": 1
				}
			]
		}
	]
}

```

## Única categoria

Nesta opção, é possível selecionar uma única categoria, o que facilita a leitura do seu array de produtos.

`GET /categories/:name - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"products": [
		{
			"description": "acampe sem preocupação",
			"price": 100,
			"name": "barraca de acampamento"
		},
		{
			"description": "seu melhor amigo de pair coding",
			"price": 1,
			"name": "patinho de borracha"
		},
		{
			"description": "seu melhor amigo de pair coding",
			"price": 1,
			"name": "gatinho de borracha"
		}
	],
	"description": "os melhores produtos de lazer",
	"name": "lazer",
	"categoryId": "2f397495-1c59-4506-b803-bc1fb86e10f0"
}
```

### Possíveis erros 

`GET /categories/:name - FORMATO DA RESPOSTA - NOT FOUND 404`

```json
{
	"error": "Categoria não encontrada"
}
```

### Rotas com autenticação

São rotas onde é necessário o login do usuário, cujo token de acesso irá disponibilizar informações, como o seu id, para que assim possa ser atribuído como criador.

Assim, onde estas APIs forem testadas, será necessário adicionar algo como `Authorization: Bearer {token}` no cabeçalho da requisição.

## Criação de uma categoria

`POST /categories - FORMATO DE REQUISIÇÃO`

```json

{
	"name": "lazer",
	"description": "os melhores produtos de lazer"
}

```

`POST /categories - FORMATO DE RESPOSTA - 201 CREATED`

```json
{
	"description": "os melhores produtos de lazer",
	"name": "lazer",
	"categoryId": "0ac9cb6b-d8bc-46ba-bc8b-1c6c8e643a8a"
}
```


### Possíveis erros 

`POST /categories - FORMATO DE RESPOSTA - 409 CONFLICT`
```json
{
	"message": "lazer already exists"
}
```

## Edição de categoria 

Você pode passar apenas um dos campos de uma categoria já existente.

`PATCH /categories/:id - FORMATO DE REQUISIÇÃO`

```json
{
	"name": "diversão",
	"description": "as melhores formas de lazer"
}
```

`POST /categories - FORMATO DE RESPOSTA - 200 OK`

```json
{
	"categoryId": "0ac9cb6b-d8bc-46ba-bc8b-1c6c8e643a8a",
	"name": "diversão",
	"description": "as melhores formas de lazer"
}
```

### Possíveis erros 

`PATCH /categories/:id - FORMATO DE REQUISIÇÃO`

```json
{
	"name": "roupa",
	"description": "as melhores roupas por um preço que cabe no seu bolso"
}
```

`POST /categories/:id - FORMATO DE RESPOSTA - 409 CONFLICT`

```json
{
	"message": "A categoria roupa já existe"
}
```

## Deleção de uma categoria 

`DELETE /categories/:id`

`Não é necessário corpo de requisição`

`DELETE /categories/:id - FORMATO DE RESPOSTA - 200 OK`

`Deletado com sucesso!`



## Criação de um produto

`POST /products - FORMATO DE REQUISIÇÃO`

```json
{
	"name": "patinho de borracha",
	"price": 1,
	"description": "o seu melhor amigo para pair coding",
	"category": "decoração"
}
```
`POST /products - FORMATO DE RESPOSTA - 201 CREATED`

```json
{
	"description": "o seu melhor amigo para pair coding",
	"price": 1,
	"name": "patinho de borracha",
	"category": {
		"categoryId": "d5b6043c-fab5-432f-82e9-abfe094d44dc",
		"name": "roupa",
		"description": "as melhores roupas por um preço que cabe no seu bolso"
	},
	"owner": {
		"id": "a4a20853-ee10-4f80-bee6-2eede6d51c06",
		"iat": 1656424429,
		"exp": 1656428029
	},
	"id": "11b755f2-a4d7-487c-afea-f0863da0b1b9"
}
```

### Possíveis erros 

`POST /products - FORMATO DE REQUISIÇÃO

```json
{
	"name": "barraca de acampamento",
	"price": 100,
	"description": "acampe sem preocupação",
	"category": "lazer"
}
```

`POST /products - FORMATO DE RESPOSTA - 400 BAD REQUEST`

```json
{
	"message": "A categoria lazer não existe"
}
```

## Deleção de um produto 

`DELETE /products/:id`

`Não é necessário corpo de requisição`

`DELETE /products/:id - FORMATO DE RESPOSTA - 200 OK`

`Deletado com sucesso!`