const express = require('express')

const app = express()
const port = 3333

app.get('/', (request, response) => {

  return response.send('Hello Word')
})

app.listen(port, () =>{
  console.log(`Server rodando na porta => ${port}`)
})