const express = require('express')

const routes = express.Router()

routes.post('/users', (request, response) => {

  const params = request.body
  console.log(params)

  return response.json({
    evento: "OmniStack 11.0",
    aluno: "Peter Thomas",
  })
})

module.exports = routes;