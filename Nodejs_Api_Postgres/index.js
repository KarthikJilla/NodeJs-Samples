const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/employees', db.getEmployees)
app.get('/employees/:id', db.getEmployeeById)
app.post('/employees', db.createEmployee)
app.put('/employees/:id', db.updateEmployee)
app.delete('/employees/:id', db.deleteEmployee)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
