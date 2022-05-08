require('dotenv').config

const express = require('express')
const app = express()
const port = process.env.RESOURCE_PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example resource server listening at http://localhost:${port}`)
})