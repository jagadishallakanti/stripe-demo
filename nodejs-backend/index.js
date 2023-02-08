const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const service = require('./service');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.post('/create_payee', service.createPayee);
app.post('/create_customer', service.createCustomer);
app.post('/pay_now', service.payNow);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
