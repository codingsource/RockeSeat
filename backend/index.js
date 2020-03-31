const express = require('express')

const app = express()
const port = 3333

app.get('/', (request, response) => {

  return response.json({
    evento: "OmniStack 11.0",
    aluno: "Peter Thomas",
  })
})

app.listen(port, () =>{
  console.log(`Server rodando na porta => ${port}`)
})