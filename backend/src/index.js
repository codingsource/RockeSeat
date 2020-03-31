/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Altear uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros, paginação) acessa os dados atraves do request.query app.get('/users', (request, response) => {
 *
 *  Router Params: Paâmetros utilizados pra identificar recursos identifica um unico recurso /users/1 app.get('/users/:id', (request, response) => {
 * (não aceita parâmetros a mais do que está sendo esperado) acessa os dados atraves do request.params
 * 
 * Request Body: O corpo da requisição, utilizado para criar ou alterar recursos app.get('/users', (request, response) => {
 * acessa os dados atraves do request.body
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELET * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  * Vamos utilizar o Knex.JS
  */

const express = require('express')
const routes = require('./routes')


const app = express()
const port = 3333

/**
 * permite que o servidor entenda o formato json na requisição post
 */
app.use(express.json())


app.use(routes)



app.listen(port, () => {
  console.log(`Server rodando na porta => ${port}`)
})