# Alterações feitas na aplicação

## Typescript

No arquivo `tsconfig.json` eu não fiz muita alteração, eu apenas defini a pasta do `outDir`

<hr />

## Express

Eu fiz o uso do <a href="https://expressjs.com/pt-br/">Express</a> para essa aplicação.

<hr />

## Rotas

Aqui tem todas as rotas para manipulação de dados, tem a rota para usuário e para o veículo.

<hr />

## CORS

Cors esta liberado para todas URLs e todos metodos de requisição porque é apenas uma aplicação de teste.

<hr />

## .env

Eu retirei o arquivo `.env` do `.gitingnore` porque não tem dados sigilosos, e estou usando o a biblioteca <a href="https://www.npmjs.com/package/dotenv">dotenv</a>. Dentro do arquivo `.env` tem apenas um token aleatório para gerar o JWT. Quero deixar claro que se fosse uma aplicação real que iria para produção, jamais colocaria o arquivo `.env` no GitHub.

<hr />

## Banco de dados

Usei o <a href="mongodb.com/pt-br">MongoDB</a> localmente, então para usar você precisa ter o Mongo instalado na sua máquina, aqui esta uma documentação para a instalação caso precise, <a href="https://www.mongodb.com/docs/v4.4/mongo/">clique aqui</a>.

<hr />

## Middleware

O único middleware que eu fiz foi para autenticação JWT.

<hr />

## Models

Os modles foi criado com <a href="https://mongoosejs.com">mongoose</a>.

<hr />

## Conclusão

Esse backend foi bem pequeno e meu foco não era totalmente no backend como pode se perceber, mas últimamente tenho praticado mais e tentando aplicar os princípios do SOLID usando programação orientada a objeto.<br />
<br />
Mas <a href="https://adonisjs.com">Adonis.js</a> está na minha lista, porque é um framework que trás tudo oque eu preciso nativamente, só preciso instalar e usar. Também sei que preciso aprender um banco de dados relacional e também esta na minha lista, principalmente quando eu começar a usar <a href="https://adonisjs.com">Adonis.js</a>. Espero que gostem dessa aplicação backend.
