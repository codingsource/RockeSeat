const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const port = 3333


app.use(cors())
/**
 * permite que o servidor entenda o formato json na requisição post
 */
app.use(express.json())

/**
 * Utilizando rotas
 */
app.use(routes)

app.listen(port, () => {
  console.log(`Server rodando na porta => ${port}`)
})