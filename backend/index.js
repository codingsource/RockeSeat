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

const express = require('express')

const app = express()
const port = 3333

/**
 * permite que o servidor entenda o formato json na requisição post
 */
app.use(express.json())

app.post('/users', (request, response) => {

  const params = request.body
  console.log(params)

  return response.json({
    evento: "OmniStack 11.0",
    aluno: "Peter Thomas",
  })
})

app.listen(port, () =>{
  console.log(`Server rodando na porta => ${port}`)
})