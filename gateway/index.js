const express = require('express')
const cors = require('cors')
const proxy = require('express-http-proxy')


const app = express()
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 1000

app.use('/customer', proxy(`http://localhost:3000`))
app.use('/shopping', proxy(`http://localhost:8000`))
app.use('/', proxy(`http://localhost:5000`)) //products -> root endpoint


app.listen(port, () => console.log(`server Gateyay is running on port http://localhost:${port}`))

